const express = require('express');
const RegisterController = require('../controllers/RegisterController');

const RegisterRouter = express.Router();

RegisterRouter.post('/register', RegisterController);

module.exports = RegisterRouter;