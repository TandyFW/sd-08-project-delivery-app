const { Product } = require('../database/models');

const getAllProducts = async () => Product.findAll();

const findById = async (id) => Product.findOne({ where: { id } });

module.exports = { 
  getAllProducts,
  findById,
};
