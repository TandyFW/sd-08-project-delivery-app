const express = require('express');
const { registerController } = require('../controllers');

const route = express.Router();

route.post('/register', registerController.registerUser);

module.exports = route;