const rescue = require('express-rescue');
const SaleService = require('../services/sales');

const getAllSales = rescue(async (_req, res) => {
  const result = await SaleService.getAllSales();
  res.status(200).json(result);
});

const createSale = rescue(async (req, res) => {
  const { id: userId } = req.user;
  const saleId = await SaleService.createSale(req.body, userId);
  const sale = await SaleService.getSaleById(saleId, { 
    attributes: ['id', 'status', 'saleDate', 'totalPrice', 'deliveryAddress'],
  });
  res.io.emit('newSale', sale);
  res.status(201).json({ saleId });
});

const updateSale = rescue(async (req, res) => {
  const result = await SaleService.updateSale(req.body);
  res.status(200).json(result);
});

const getDetailedSale = rescue(async (req, res) => {
  const { id } = req.params;
  const result = await SaleService.getDetailedSale(id);
  res.json(result);
});

module.exports = {
  getAllSales,
  createSale,
  updateSale,
  getDetailedSale,
};
