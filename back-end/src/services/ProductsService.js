const { Products } = require('../database/models')

const getAllProducts = async () => {
  const products = await Products.findAll();
  return products;
}

module.exports = { getAllProducts }