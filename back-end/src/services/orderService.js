const registerSchema = require('../schemas/registerSchema');
const { sale, salesProducts, product } = require('../database/models');
const clientError = require('../utils/clientError');

const createOrder = async (dataForCreate) => {
  console.log('entrou');
  const {userId, sellerId, totalPrice, deliveryAddress, deliveryNumber ,salesDate ,status, stateCart } = dataForCreate;
  const dataForModel = {
    user_id: userId, seller_id: parseInt(sellerId, 10), totalPrice: parseFloat(totalPrice), deliveryAddress, deliveryNumber ,salesDate ,status
  }
  const result = await sale.create(dataForModel);
   stateCart.forEach(  ( async product =>{
     const subResult = await salesProducts.create({ sale_id: result.id, product_id: product.id, quantity: product.quantity   });
    }) )
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
  const userId = 'user_id'; // Miau para quem fez essa regra =)
  const foundSales = await sale.findAll({
    where: { [userId]: id },
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
