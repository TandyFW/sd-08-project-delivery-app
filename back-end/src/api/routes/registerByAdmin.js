const express = require('express');
const { registerByAdminController } = require('../controllers');
const { userJwtAuth, hasRole } = require('../middlewares');

const route = express.Router();

route.post('/admin', userJwtAuth, hasRole('administrator'), registerByAdminController.register);

module.exports = route;