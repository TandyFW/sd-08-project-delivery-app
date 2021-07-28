const { Router } = require('express');
const productsController = require('../controllers/productsController');

const customerRouter = Router();

customerRouter.get('/products', productsController.getAll);

module.exports = customerRouter;
