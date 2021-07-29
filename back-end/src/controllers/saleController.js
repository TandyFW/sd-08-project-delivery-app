const rescue = require('express-rescue');
const saleServices = require('../services/saleService');
const { OK } = require('../statusCode');

const saveSale = rescue(async (req, res) => {
      await saleServices.saveSale(req.body);

      res.status(OK).json({ message: 'Venda cadastrada!' });
});

module.exports = saveSale;