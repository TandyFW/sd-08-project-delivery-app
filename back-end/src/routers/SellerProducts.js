const express = require('express');
const AuthController = require('../controllers/AuthController');
const { findAllSales } = require('../controllers/SellerOrders');

const sellerRouter = express();

sellerRouter.post('/seller/orders', findAllSales);

module.exports = sellerRouter;
