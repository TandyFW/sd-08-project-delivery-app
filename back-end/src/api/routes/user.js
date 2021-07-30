const express = require('express');
const { userController } = require('../controllers');
const { userJwtAuth } = require('../middlewares');

const route = express.Router();

route.post('/login', userController.login);
route.get('/users/:id', userJwtAuth, userController.getUserById);

module.exports = route;