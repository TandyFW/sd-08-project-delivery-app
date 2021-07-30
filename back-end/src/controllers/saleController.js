const rescue = require('express-rescue');
const SaleService = require('../services/saleService');

const registerSale = rescue(async (req, res, next) => {
  const saleDetails = req.body;
  const token = req.headers.authorization;
  const resultService = await SaleService.registerSale(saleDetails, token);
  if (resultService.err) return next(resultService);
  res.status(201).json(resultService);
});

const getAllOrdersByClient = rescue(async (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);
  const resulService = await SaleService.getAllOrdersByClient(token);
  if (resulService.err) return next(resulService);
  res.status(200).json(resulService);
});

const getAllOrdersBySeller = rescue(async (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);
  const resulService = await SaleService.getAllOrdersBySeller(token);
  if (resulService.err) return next(resulService);
  res.status(200).json(resulService);
});

module.exports = {
  registerSale,
  getAllOrdersByClient,
  getAllOrdersBySeller,
};
