const router = require('express').Router();

const SalesController = require('../controllers/sales');

router.get('/list', SalesController.getAllSales);

router.post('/create', SalesController.createSale);

router.put('/status', SalesController.updateSale);

module.exports = router;