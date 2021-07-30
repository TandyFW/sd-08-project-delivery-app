const rootRouter = require('express').Router();
const customerRouter = require('./customer');
const LoginController = require('../controllers/login');
const ProductsController = require('../controllers/products');
const SalesController = require('../controllers/sales');

rootRouter.use('/customer', customerRouter);

rootRouter.post('/login', LoginController);

rootRouter.get('/products', ProductsController);

rootRouter.get('/orders', SalesController);

module.exports = rootRouter;
