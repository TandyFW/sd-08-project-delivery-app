const express = require('express');
const AuthAdminController = require('../controllers/AuthAdminController');
const { createUser, createUserByAdmin } = require('../controllers/RegisterController');

const RegisterRouter = express.Router();

RegisterRouter.post('/register', createUser);
RegisterRouter.post('/register/admin', AuthAdminController, createUserByAdmin);

module.exports = RegisterRouter;