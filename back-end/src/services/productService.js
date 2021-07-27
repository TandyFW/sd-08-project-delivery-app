const { Product } = require('../database/models');
const productsError = require('../schema/productsError');

const getAllProducts = async () => {
  const products = await Product.findAll();
  if (!products) return productsError.productsNotFound;
  return products;
};

module.exports = {
  getAllProducts,
};