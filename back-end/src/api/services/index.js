const getUser = require('./usersService/getUser');
const getUserById = require('./usersService/getUserById');
const getUsersByRole = require('./usersService/getUsersByRole');
const getCustomersAndSellersUser = require('./usersService/getCustomersAndSellersUser');
const registerUser = require('./usersService/registerUser');
const removeUserById = require('./usersService/removeUserById');
const getAllProducts = require('./productsService/getAllProducts');
const getProductById = require('./productsService/getProductById');
const createSaleOrder = require('./salesService/createSaleOrder');
const createSaleProductOrder = require('./salesService/createSaleProductOrder');
const getAllOrdersByUser = require('./salesService/getAllOrdersByUser');
const getDetailOrdersByUserId = require('./salesService/getDetailOrdersByUserId');
const getSaleById = require('./salesService/getSaleById');
const updateOrder = require('./salesService/updateOrder');

module.exports = {
  getUser,
  getAllProducts,
  getProductById,
  registerUser,
  createSaleOrder,
  createSaleProductOrder,
  getSaleById,
  getUsersByRole,
  getUserById,
  getAllOrdersByUser,
  getDetailOrdersByUserId,
  updateOrder,
  getCustomersAndSellersUser,
  removeUserById,
};
