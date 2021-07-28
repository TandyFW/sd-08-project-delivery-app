const getUser = require('./getUser');
const getAllProducts = require('./getAllProducts');
const getProductById = require('./getProductById');
const registerUser = require('./registerUser');
const createSaleOrder = require('./createSaleOrder');
const createSaleProductOrder = require('./createSaleProductOrder');
const getUsersByRole = require('./getUsersByRole');
const getUserById = require('./getUserById');
const getSaleById = require('./getSaleById');
const getAllOrdersByUser = require('./getAllOrdersByUser');
const getOrderById = require('./getOrderById');

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
  getOrderById,
};
