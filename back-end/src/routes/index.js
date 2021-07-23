const routes = require('express').Router();
const LoginRoutes = require('./login');

routes.use('/login', LoginRoutes);

module.exports = routes;
