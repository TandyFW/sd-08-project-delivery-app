const getUser = require('./getUser');
const getAllProducts = require('./getAllProducts');
const getProductById = require('./getProductById');
const registerUser = require('./registerUser');
const createSaleOrder = require('./createSaleOrder');
const createSaleProductOrder = require('./createSaleProductOrder');
const getUsersByRole = require('./getUsersByRole');
const getSaleById = require('./getSaleById');

module.exports = {
  getUser,
  getAllProducts,
  getProductById,
  registerUser,
  createSaleOrder,
  createSaleProductOrder,
  getSaleById,
  getUsersByRole,
};
