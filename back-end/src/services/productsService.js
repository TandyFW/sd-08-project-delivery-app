const { product } = require('../database/models');

const getProducts = async () => {
const products = await product.findAll();
return products;
};

module.exports = { getProducts };
