const express = require('express');
const { saleController } = require('../controllers');
// const { userJwtAuth, hasRole } = require('../middlewares');

const route = express.Router();

route.get('/sale/:encodedName', saleController.requestSales);

// route.get('/sale', saleController.requestAllSales);

module.exports = route;