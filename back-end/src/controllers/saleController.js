const rescue = require('express-rescue');
const SaleService = require('../services/saleService');

const registerSale = rescue(async (req, res, next) => {
  const saleDetails = req.body;
  const token = req.headers.authorization;
  const resultService = await SaleService.registerSale(saleDetails, token);
  if (resultService.err) return next(resultService);
  res.status(201).json(resultService);
});

module.exports = {
  registerSale,
}
