const rootRouter = require('express').Router();
const customerRouter = require('./customer');
const LoginController = require('../controllers/login');

rootRouter.use('/customer', customerRouter);

rootRouter.post('/login', LoginController);

module.exports = rootRouter;
