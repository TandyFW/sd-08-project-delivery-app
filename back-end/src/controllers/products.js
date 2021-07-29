const rescue = require('express-rescue');
const ProductsService = require('../services/products');

const getAllProducts = rescue(async (_req, res) => {
  const result = await ProductsService.getAllProducts();
  res.status(200).json(result);
});

module.exports = getAllProducts;
