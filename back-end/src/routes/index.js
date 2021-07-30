const routes = require('express').Router();
const LoginRoutes = require('./login');
const UserRoutes = require('./user');
const ProductRoutes = require('./product');

const SaleRoutes = require('./sale');

routes.use('/login', LoginRoutes);
routes.use('/user', UserRoutes);
routes.use('/sale', SaleRoutes);
routes.use('/product', ProductRoutes);

module.exports = routes;
