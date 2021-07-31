const routes = require('express').Router();
const LoginRoutes = require('./login');
const UserRoutes = require('./user');
const ProductRoutes = require('./product');
const SaleRoutes = require('./sale');

routes.use('/login', LoginRoutes);
routes.use('/user', UserRoutes);
routes.use('/product', ProductRoutes);
routes.use('/sale', SaleRoutes);

module.exports = routes;
