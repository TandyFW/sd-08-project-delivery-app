const express = require('express');
const { saleController } = require('../controllers');
const { userJwtAuth } = require('../middlewares');

const route = express.Router();

route.get('/sales/:id', userJwtAuth, saleController.getSaleProducts);

module.exports = route;