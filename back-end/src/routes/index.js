const routes = require('express').Router();
const LoginRoutes = require('./login');
const UserRoutes = require('./user');
const SaleRoutes = require('./sale');

routes.use('/login', LoginRoutes);
routes.use('/user', UserRoutes);
routes.use('/sale', SaleRoutes);

module.exports = routes;
