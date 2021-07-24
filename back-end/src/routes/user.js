const routes = require('express').Router();

const UserController = require('../controllers/userController');

routes.post('/', UserController.create);

module.exports = routes;
