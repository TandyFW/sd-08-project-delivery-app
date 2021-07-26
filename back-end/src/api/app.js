const express = require('express');
const loginController = require('../controllers/loginController');
const registerController = require('../controllers/registerController');

const app = express();

app.post('/login', loginController);
app.post('/register', registerController);

module.exports = app;
