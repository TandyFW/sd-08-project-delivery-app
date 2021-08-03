const express = require('express');
const { findAllSales } = require('../controllers/SellerOrders');

const sellerRouter = express();

sellerRouter.post('/seller/orders', findAllSales);

module.exports = sellerRouter;
