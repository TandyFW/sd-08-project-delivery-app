const routes = require('express').Router();

const LoginController = require('../controllers/loginController');

routes.post('/', LoginController.login);

module.exports = routes;
