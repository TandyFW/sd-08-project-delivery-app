const routes = require('express').Router();

const saleController = require('../controllers/saleController');

routes.post('/', saleController.saveSale);
routes.get('/', saleController.getSales);
routes.get('/:id', saleController.getSaleById);
routes.get('/user/:id', saleController.getSalesByUserId);
routes.get('/seller/:id', saleController.getSalesBySellerId);

module.exports = routes;
