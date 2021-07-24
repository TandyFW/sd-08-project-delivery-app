const routes = require('express').Router();
const LoginRoutes = require('./login');
const UserRoutes = require('./user');

routes.use('/login', LoginRoutes);
routes.use('/user', UserRoutes);

module.exports = routes;
