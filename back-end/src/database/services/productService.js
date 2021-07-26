const { products } = require('../models');

const getAll = async () => {
  const allProducts = await products.findAll();
  return allProducts;
};

module.exports = {
  getAll,
};
