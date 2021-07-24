const rescue = require('express-rescue');
const success = require('../utils/success');
const { product } = require('../database/models');

const getAllProducts = rescue(async (req, res, next) => {
  const result = await product.findAll();
  res.status(200).json(result);
});

module.exports = {
  getAllProducts,
};
