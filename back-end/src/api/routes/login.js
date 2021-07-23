const express = require('express');
const { loginController } = require('../controllers');

const route = express.Router();

route.post('/login', loginController.login);

module.exports = route;
