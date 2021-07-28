const express = require('express');
const { productController } = require('../controllers');

const route = express.Router();

route.get('/products', productController.getAllProducts);

module.exports = route;