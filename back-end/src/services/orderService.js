const registerSchema = require('../schemas/registerSchema');
const { sale, salesProducts, product } = require('../database/models');
const clientError = require('../utils/clientError');

const userSnake = 'user_id'; // Miau para quem fez essa regra =)
const sellerSnake = 'seller_id'; // Miau para quem fez essa regra =)
const productIdSnake = 'product_id'; // Miau para quem fez essa regra =)
const saleIdSnacke = 'sale_id'; // Miau para quem fez essa regra =)
const totalPriceSnake = 'total_price'; // Miau para quem fez essa regra =)
const deliveryAddressSnake = 'delivery_address'; // Miau para quem fez essa regra =)
const deliveryNumberSnake = 'delivery_number'; // Miau para quem fez essa regra =)
const salesDateSnake = 'sale_date'; // Miau para quem fez essa regra =)

const createOrder = async (dataForCreate) => {
  const { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, 
    salesDate, status, stateCart } = dataForCreate;
  const dataForModel = { [userSnake]: userId,
    [sellerSnake]: parseInt(sellerId, 10),
    [totalPriceSnake]: parseFloat(totalPrice), 
    [deliveryAddressSnake]: deliveryAddress,
    [deliveryNumberSnake]: deliveryNumber,
    [salesDateSnake]: salesDate,
    status,
  };
  // console.log(dataForModel);
  const result = await sale.create(dataForModel);
   stateCart.forEach((async (productItem) => {
      await salesProducts.create({ [saleIdSnacke]: result.id,
[productIdSnake]: productItem.id,
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
    where: { [userSnake]: id },
    attributes: { exclude: ['user_id'] }, // exclui o order
    include: [
      {
      attributes: { exclude: [''] }, /* exclui o product */
      model: product,
      as: 'productId',
      required: false,
      through: { 
        attributes: { exclude: ['sale_id', 'product_id'] }, // exclui o salesProducts
      },
    },
  ],
  });

  return foundSales;
};

const getAllOrdersBySellerId = async (id) => {
  const sellerId = 'seller_id'; // Miau para quem fez essa regra =)
  const foundSales = await sale.findAll({
    where: { [sellerId]: id },
    attributes: { exclude: ['seller_id'] }, // exclui o order
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

  const getOrdersByUserById = async (id, ordersId) => {
    const foundSales = await sale.findAll({
      where: { [userSnake]: id, id: parseInt(ordersId, 10) },
      attributes: { exclude: ['user_id'] }, // exclui o order
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
  
  const getOrdersBySellerById = async (id, ordersId) => {
    const sellerId = 'seller_id'; // Miau para quem fez essa regra =)
    const foundSales = await sale.findAll({
      where: { [sellerId]: id, id: parseInt(ordersId, 10) },
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
  getOrdersByUserById,
  getOrdersBySellerById,
  // getAllAll,
};

// const { error } = registerSchema.create.validate(dataForCreate);
// if (error) return clientError.badRequest(error.details[0].message);
// include: [{model: sale, as: 'saleId' }, { model: product, as: 'productId' }]