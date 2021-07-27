const express = require('express');
const AuthController = require('../controllers/AuthController');
const UserProductsController = require('../controllers/UserProductsController');

const CustomerRouter = express.Router();

CustomerRouter.get('/customer/products', AuthController, UserProductsController);

module.exports = CustomerRouter;