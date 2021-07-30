const routes = require('express').Router();

const UserController = require('../controllers/userController');

routes.post('/', UserController.create);
routes.get('/', UserController.getUsers);

module.exports = routes;
