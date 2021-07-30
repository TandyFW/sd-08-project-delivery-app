const express = require('express');
const { getAllSales, addNewSale } = require('../controllers/sales');
const validateJWT = require('../middlewares/validateJWT');
const Sales = express.Router();

Sales.get('/', validateJWT, getAllSales);
Sales.post('/', validateJWT, addNewSale);

module.exports = Sales;