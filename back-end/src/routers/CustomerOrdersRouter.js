const express = require('express');
const AuthController = require('../controllers/AuthController');
const {
  getAllUserOrders,
  getOrderById,
  updateOrderStatus } = require('../controllers/CustomerOrdersController');

const CustomerOrdersRouter = express.Router();

CustomerOrdersRouter.get('/customer/orders', AuthController, getAllUserOrders);
CustomerOrdersRouter.put('/customer/orders/:id', AuthController, updateOrderStatus);
CustomerOrdersRouter.get('/customer/orders/:id', AuthController, getOrderById);

module.exports = CustomerOrdersRouter;