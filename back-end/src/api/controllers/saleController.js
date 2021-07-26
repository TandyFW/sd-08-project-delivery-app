const tcw = require('../utils').tryCatchWrapper;
const { saleService } = require('../services');

const requestSales = tcw(async (req, res, next) => {
  const { name } = req.params;
  const { result, error } = await saleService.findSales(name);
  if (error) return next(error);
  res.status(200).json(result);
});

const requestAllSales = tcw(async (req, res, next) => {
  const { result, error } = await saleService.findAllSales();
  if (error) return next(error);
  res.status(200).json(result);
});

module.exports = {
  requestSales,
  requestAllSales,
};