const express = require('express');
const AuthController = require('../controllers/AuthController');
const { inputSelectSellers, findIdUser } = require('../controllers/CustomerCheckout');

const CustomerCheckoutRouter = express.Router();

CustomerCheckoutRouter.get('/customer/checkout', inputSelectSellers);
CustomerCheckoutRouter.post('/customer/checkout', findIdUser);

module.exports = CustomerCheckoutRouter;