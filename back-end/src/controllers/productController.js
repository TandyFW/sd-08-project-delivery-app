const rescue = require('express-rescue');
const ProductService = require('../services/productService');
const { OK } = require('../statusCode');

const getAll = rescue(async (_req, res) => {
  const allProducts = await ProductService.getAll();
  res.status(OK).json({ products: allProducts });
});

module.exports = {
  getAll,
};
