const express = require('express');
const cors = require('cors');

const port = process.env.PORT || 3001;
const app = require('./app');
const userController = require('../controllers/userController');
const loginController = require('../controllers/loginController');

app.use(express.json());

app.use(cors());

app.use('/login', loginController);
app.use('/', userController);

app.listen(port);
console.log(`Api rodando na porta ${port}`);
