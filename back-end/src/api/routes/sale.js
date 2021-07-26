const express = require('express');
const { saleController } = require('../controllers');

const route = express.Router();

route.get('/sale/:name', saleController.requestSales);

route.get('/sale', saleController.requestAllSales);

module.exports = route;