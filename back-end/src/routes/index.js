const routes = require('express').Router();
const LoginRoutes = require('./login');
const UserRoutes = require('./user');
const ProductRoutes = require('./product');

routes.use('/login', LoginRoutes);
routes.use('/user', UserRoutes);
routes.use('/product', ProductRoutes);

module.exports = routes;
