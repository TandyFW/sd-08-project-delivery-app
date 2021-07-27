const express = require('express');
const { getAllSales } = require('../controllers/sales')
const Sales = express.Router();

Sales.get('/', getAllSales);

module.exports = Sales;