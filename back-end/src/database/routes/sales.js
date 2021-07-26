const express = require('express');
const { getAllSales } = require('../controllers/Sales')
const Sales = express.Router();

Sales.get('/', getAllSales);

module.exports = Sales;