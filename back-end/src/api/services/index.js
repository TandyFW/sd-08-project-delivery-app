const getUser = require('./getUser');
const getAllProducts = require('./getAllProducts');
const getProductById = require('./getProductById');
const registerUser = require('./registerUser');
const createCustomerOrder = require('./createCustomerOrder');
const getUsersByRole = require('./getUsersByRole');

module.exports = {
  getUser,
  getAllProducts,
  getProductById,
  registerUser,
  createCustomerOrder,
  getUsersByRole,
};
