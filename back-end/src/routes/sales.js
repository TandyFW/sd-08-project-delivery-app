const router = require('express').Router();

const SalesController = require('../controllers/sales');

router.get('/list', SalesController.getAllSales);

router.post('/create', SalesController.createSale);

module.exports = router;