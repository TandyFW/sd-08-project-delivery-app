const { productService } = require('../services');
const tcw = require('../utils').tryCatchWrapper;

const getAllProducts = tcw(async (_req, res, next) => {
  const { result, error } = await productService.getAllProducts();
  if (error) return next(error);
  res.status(200).json(result);
});

module.exports = {
  getAllProducts,
};