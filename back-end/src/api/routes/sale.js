const express = require('express');
const { saleController } = require('../controllers');
const { userJwtAuth, hasRole } = require('../middlewares');

const route = express.Router();

route.get('/sales/:id', userJwtAuth, saleController.getSaleProducts);

route.post('/sales', userJwtAuth, hasRole('customer'), saleController.createNewSale);

module.exports = route;