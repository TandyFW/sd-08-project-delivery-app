const routes = require('express').Router();

const saveSale = require('../controllers/saleController');

routes.post('/', saveSale);

module.exports = routes;
