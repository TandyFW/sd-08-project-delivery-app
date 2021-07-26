const { Product } = require('../../database/models');

const getAllProducts = async () => {
  const products = await Product.findAll();
  return { result: products };
};

module.exports = {
  getAllProducts,
};