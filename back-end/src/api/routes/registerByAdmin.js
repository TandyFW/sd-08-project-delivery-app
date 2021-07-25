const express = require('express');
const { registerByAdminController } = require('../controllers');

const route = express.Router();

route.post('/register/Admin', registerByAdminController.register);

module.exports = route;