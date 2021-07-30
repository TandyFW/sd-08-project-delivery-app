const tcw = require('../utils').tryCatchWrapper;
const { saleService } = require('../services');

const getSaleProducts = tcw(async (req, res, next) => {
  const { id } = req.params;
  const { result, error } = await saleService.getSaleProducts(id);
  if (error) return next(error);
  res.status(200).json(result);
});

module.exports = {
  getSaleProducts,
};