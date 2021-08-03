const { getAllProducts } = require('../services/ProductsService');

module.exports = async (_req, res) => {
  const products = await getAllProducts();
  return res.status(200).json(products);
};