const userService = require('./userService');
const saleService = require('./saleService');
const productService = require('./productService');
const registerService = require('./registerService');
const transactionService = require('./transactionService');

module.exports = {
  transactionService,
  userService,
  productService,
  registerService,
  saleService,
};
