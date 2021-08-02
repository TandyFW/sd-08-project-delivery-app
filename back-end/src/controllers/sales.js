const rescue = require('express-rescue');
const SaleService = require('../services/sales');

const getAllSales = rescue(async (_req, res) => {
  const result = await SaleService.getAllSales();
  res.status(200).json(result);
});

const createSale = rescue(async (req, res) => {
  console.log(req.body);
  const { id: userId } = req.user;
  const result = await SaleService.createSale(req.body, userId);
  res.status(201).json({ saleId: result });
});

const updateSale = rescue(async (req, res) => {
  const result = await SaleService.updateSale(req.body);
  res.status(200).json(result);
});

module.exports = {
  getAllSales,
  createSale,
  updateSale,
};
