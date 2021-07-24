const rescue = require('express-rescue');
const success = require('../utils/success');
const { product } = require('../database/models');

const getAllProducts = rescue(async (_req, res, _next) => {
  const result = await product.findAll();
  res.status(success.Ok).json(result);
});

module.exports = {
  getAllProducts,
};
