const express = require('express');
const { productController } = require('../controllers');
const { userJwtAuth, hasRole } = require('../middlewares');

const route = express.Router();

route.get('/products', userJwtAuth, hasRole('customer'), productController.getAllProducts);

module.exports = route;