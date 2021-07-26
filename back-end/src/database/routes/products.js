const express = require('express');

const Products = express.Router();

Products.get('/');

module.exports = Products;