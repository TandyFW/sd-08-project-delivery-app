const express = require('express');
const AuthController = require('../controllers/AuthController');
const { getAllUserOrders, getOrderById } = require('../controllers/CustomerOrdersController');

const CustomerOrdersRouter = express.Router();

CustomerOrdersRouter.get('/customer/orders', AuthController, getAllUserOrders);
CustomerOrdersRouter.get('/customer/orders/:id', AuthController, getOrderById);

module.exports = CustomerOrdersRouter;