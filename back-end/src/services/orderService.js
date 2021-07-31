const registerSchema = require('../schemas/registerSchema');
const { sale, salesProducts, product } = require('../database/models');
const clientError = require('../utils/clientError');

const userIdNOTCAMEL = 'user_id'; // Miau para quem fez essa regra =)
const sellerIDNOTCAMEL = 'seller_id'; // Miau para quem fez essa regra =)
const productIdNOTCAMEL = 'product_id'; // Miau para quem fez essa regra =)
const saleIdIDNOTCAMEL = 'sale_id'; // Miau para quem fez essa regra =)
const createOrder = async (dataForCreate) => {
  const { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, 
    salesDate, status, stateCart } = dataForCreate;
  const dataForModel = {
    [userIdNOTCAMEL]: userId,
[sellerIDNOTCAMEL]: parseInt(sellerId, 10),
totalPrice: parseFloat(totalPrice), 
    deliveryAddress,
deliveryNumber,
salesDate,
status,
  };
  const result = await sale.create(dataForModel);
   stateCart.forEach((async (productItem) => {
      await salesProducts.create({ [saleIdIDNOTCAMEL]: result.id,
[productIdNOTCAMEL]: productItem.id,
quantity: productItem.quantity });
    }));
  return result;
};

const getAllOrders = () => sale.findAll();

const getOrderById = async (id) => {
  const { error } = registerSchema.checkId.validate(id);
  if (error) return clientError.badRequest(error.details[0].message);

  try {
    const { dataValues: { password: _, ...result } } = await sale.findByPk(id);
    return result;
  } catch (err) {
    return clientError.badRequest(`Not Found Id: ${id}`);
  }
};

const getAllOrdersByUserId = async (id) => {
  const foundSales = await sale.findAll({
    where: { [userIdNOTCAMEL]: id },
    attributes: { exclude: ['seller_id', 'user_id'] }, // exclui o order
    include: [{
      attributes: { exclude: [''] }, /* exclui o product */
      model: product,
      as: 'productId',
      required: false,
      through: { 
        attributes: { exclude: ['sale_id', 'product_id'] }, // exclui o salesProducts
      },
    }],
  });

  return foundSales;
};

const getAllOrdersBySellerId = async (id) => {
  const sellerId = 'seller_id'; // Miau para quem fez essa regra =)
  const foundSales = await sale.findAll({
    where: { [sellerId]: id },
    attributes: { exclude: ['seller_id', 'user_id'] }, // exclui o order
    include: [{
      attributes: { exclude: [''] }, /* exclui o product */
      model: product,
      as: 'productId',
      required: false,
      through: { 
        attributes: { exclude: ['sale_id', 'product_id'] }, // exclui o salesProducts
      },
    }],
  });

  return foundSales;
};

// getAllOrdersByUserId('1').then((data) => console.log(data));

// getById('1').then(console.log);

module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
  getAllOrdersByUserId,
  getAllOrdersBySellerId,
  // getAllAll,
};

// const { error } = registerSchema.create.validate(dataForCreate);
// if (error) return clientError.badRequest(error.details[0].message);
// // include: [{model: sale, as: 'saleId' }, { model: product, as: 'productId' }],
