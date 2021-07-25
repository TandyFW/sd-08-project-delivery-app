const rescue = require('express-rescue');
const { Product } = require('../database/models');

const getAllProducts = rescue(async (_req, res, _next) => {
  const result = await Product.findAll();
  res.status(200).json(result);
});

module.exports = {
  getAllProducts,
};
