const route = require('express').Router();
const userController = require('../controllers/userController');

route.post('/login', userController.login);
route.post('/register/user', userController.registerClient);

module.exports = route;
