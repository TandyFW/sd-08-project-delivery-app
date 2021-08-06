const rootRouter = require('express').Router();
const customerRouter = require('./customer');
const LoginController = require('../controllers/login');
const ProductsController = require('../controllers/products');
const UserController = require('../controllers/user');
const SellerController = require('../controllers/seller');
const saleRouter = require('./sales');
const adminAuth = require('../middlewares/adminAuth');

rootRouter.use('/customer', customerRouter);

rootRouter.post('/login', LoginController);

rootRouter.get('/products', ProductsController);

rootRouter.use('/sales', saleRouter);

rootRouter.get('/sellers', SellerController);

rootRouter.post('/admin', adminAuth, UserController.adminCreate);

module.exports = rootRouter;
