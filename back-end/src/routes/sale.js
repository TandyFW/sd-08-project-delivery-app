const routes = require('express').Router();

const saleController = require('../controllers/saleController');

routes.post('/', saleController.saveSale);
routes.get('/', saleController.getSales);
routes.get('/:id', saleController.getSaleById);

module.exports = routes;
