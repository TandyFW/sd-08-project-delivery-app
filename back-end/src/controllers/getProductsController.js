const productsService = require('../services/productsService');

const products = async (req, res) => {
  const { statusCode, json } = await productsService.findProducts();
  res.status(statusCode).json(json);
};

module.exports = products;
