const boom = require('@hapi/boom');
const { Product } = require('../database/models');

const getAllProducts = async () => Product.findAll();

module.exports = { getAllProducts };