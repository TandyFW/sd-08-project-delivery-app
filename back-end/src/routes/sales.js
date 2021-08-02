const router = require('express').Router();
const auth = require('../middlewares/auth');
const SalesController = require('../controllers/sales');

router.get('/', SalesController.getAllSales);

router.post('/', auth, SalesController.createSale);

router.put('/status', SalesController.updateSale);

module.exports = router;
