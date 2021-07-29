const rescue = require('express-rescue');
const saleServices = require('../services/saleService');
const { OK } = require('../statusCode');

const saveSale = rescue(async (req, res) => {
      const saleId = await saleServices.saveSale(req.body);

      res.status(OK).json({ saleId, message: 'Venda cadastrada com sucesso' });
});

module.exports = saveSale;