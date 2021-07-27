const express = require('express');
const LoginController = require('../controllers/LoginController');

const LoginRouter = express.Router();

LoginRouter.post('/login', LoginController);

module.exports = LoginRouter;