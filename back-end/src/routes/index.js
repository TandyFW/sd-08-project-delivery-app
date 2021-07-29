const rootRouter = require('express').Router();
const customerRouter = require('./customer');
const LoginController = require('../controllers/login');
const ProductsController = require('../controllers/products');

rootRouter.use('/customer', customerRouter);

rootRouter.post('/login', LoginController);

rootRouter.get('/products', ProductsController);

module.exports = rootRouter;
