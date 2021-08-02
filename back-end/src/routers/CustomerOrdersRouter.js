const express = require('express');
const AuthController = require('../controllers/AuthController')
const { getAllUserOrders } = require('../controllers/CustomerOrdersController');

const CustomerOrdersRouter = express.Router();


CustomerOrdersRouter.get('/customer/orders', AuthController, getAllUserOrders );

module.exports = CustomerOrdersRouter;