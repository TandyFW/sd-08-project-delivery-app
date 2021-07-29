const rescue = require('express-rescue');
const SaleService = require('../services/sales');

const getAllSales = rescue(async (req, res) => {
  const result = await SaleService.getAllSales();
  res.status(200).json(result);
});

const createSale = rescue(async (req, res) => {
  const result = await SaleService.createSale(req.body);
  res.status(201).json(result);
});

module.exports = { getAllSales, createSale };