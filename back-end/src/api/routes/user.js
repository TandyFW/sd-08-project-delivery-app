const express = require('express');
const { userController } = require('../controllers');
const { userJwtAuth, hasRole } = require('../middlewares');

const route = express.Router();

route.post('/login', userController.login);
route.get('/users/all', userJwtAuth, hasRole('administrator'), userController.getAllUsers);
route.get('/users/:id', userJwtAuth, userController.getUserById);
route.get('/users', userJwtAuth, hasRole('customer'), userController.getAllSellers);
route.delete('/users/:id', userJwtAuth, hasRole('administrator'), userController.removeUser);

module.exports = route;
