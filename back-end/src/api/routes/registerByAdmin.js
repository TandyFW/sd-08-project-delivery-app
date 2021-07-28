const express = require('express');
const { registerByAdminController } = require('../controllers');

const route = express.Router();

route.post('/admin', registerByAdminController.register);

module.exports = route;