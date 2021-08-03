const { sale, user, product, saleProduct } = require('../database/models');

const messageError = 'Algo deu errado';

// callback criadas para testes das associações
const getAllSalesUser = async (req, res) => {
  try {
    const data = await sale.findAll({
      attributes: { exclude: ['user_id', 'seller_id'] },
      include: [
        { model: user, as: 'user', attributes: { exclude: ['id'] } },
        { model: user, as: 'seller', attributes: { exclude: ['id'] } },
      ],
    });
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ message: messageError, err });
  }
};

const getAllSalesProducts = async (req, res) => {
  try {
    const data = await sale.findAll({
      attributes: { exclude: ['user_id', 'seller_id'] },
      include: [
        { model: product, as: 'products', through: { attributes: [] } },
      ],
    });
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ message: messageError, err });
  }
};
// ----------------------------------------------------------------------

// teste Gustavo - requisição create POST **UTILIZAR CAMEL CASE NA CREATED**
const createSaleTeste = async (req, res) => {
  const { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, status } = req.body;
  try {
    const data = await sale.create({
      userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, status,
    });
    const created = await sale.findOne({ where: { id: data.id } });

    return res.status(200).json(created);
  } catch (err) {
    return res.status(500).json({ message: messageError, err });
  }
};

const createSaleProducts = async (req, res) => {
  const { saleId, productId } = req.body;
  try {
    await saleProduct.create({ saleId, productId });
    return res.status(200).json({ saleId, productId });
  } catch (err) {
    return res.status(500).json({ message: messageError, err });
  }
};
// ----------------------------------------------------------------------

// teste Ruan
const createRelation = async (req, res) => {
  const data = await saleProduct.findAll({});
  return res.status(200).json(data);
};
// ----------------------------------------------------------------------

// CALLBACK VALIDAS
const getSalesByUser = async (req, res) => {
  const { email } = req.body;
  try {
    const { id } = await user.findOne({
      where: { email },
    });
    const data = await sale.findAll({
      where: { userId: id },
    });
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ message: messageError, err });
  }
};

const createSale = async (req, res) => {
  try {
    const {
      userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, status, products, quantity,
    } = req.body;
    const t = totalPrice.replace(/,/g, '.');
    const data = await sale.create({
    userId, sellerId, totalPrice: t, deliveryAddress, deliveryNumber, status, saleDate: new Date(),
    });
    const { id } = await sale.findOne({ where: { id: data.id } });
    await products.forEach((item, index) => {
      saleProduct.create({ saleId: id, productId: item, quantity: quantity[index] });
    });
    return res.status(201).json(id);
  } catch (err) {
    return res.status(500).json({ message: messageError, err });
  }
};

module.exports = {
  // teste de associações
  getAllSalesUser,
  getAllSalesProducts,
  // teste Gustavo
  createSaleTeste,
  createSaleProducts,
  // teste Ruan
  createRelation,
  // --------------------
  // CALLBACK VALIDAS
  getSalesByUser,
  createSale,
};
