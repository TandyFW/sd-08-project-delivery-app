const express = require('express');
const { transactionController } = require('../controllers');
// const { userJwtAuth, hasRole } = require('../middlewares');

const route = express.Router();

route.get('/sale/:encodedName', transactionController.requestTransactions('sales'));

route.get('/pucharse/:encodedName', transactionController.requestTransactions('purchases'));

// route.get('/sale', saleController.requestAllSales);

module.exports = route;