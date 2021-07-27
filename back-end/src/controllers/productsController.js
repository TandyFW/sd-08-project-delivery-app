const rescue = require('express-rescue');
const productsService = require('../services/productService');

const getAllProducts = rescue(async (_req, res, next) => {
  const resultService = await productsService.getAllProducts();
  if(resultService.err) return next(resultService);
  res.status(200).json(resultService);
});

module.exports = {
  getAllProducts,
}
