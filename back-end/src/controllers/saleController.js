const rescue = require('express-rescue');
const saleServices = require('../services/saleService');
const { OK, CREATED } = require('../statusCode');

const saveSale = rescue(async (req, res) => {
      const saleId = await saleServices.saveSale(req.body);

      res.status(CREATED).json({ saleId, message: 'Venda cadastrada com sucesso' });
});

const getSales = rescue(async (_req, res) => {
      const Sales = await saleServices.getSales();
      res.status(OK).json(Sales);
});

const getSaleById = rescue(async (req, res) => {
    const { id } = req.params;

    const Sale = await saleServices.getSaleById(id);
      res.status(OK).json(Sale);
});

module.exports = {
      saveSale,
      getSales,
      getSaleById,
 };
