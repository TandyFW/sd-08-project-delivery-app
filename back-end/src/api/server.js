const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 3001;
const app = require('./app');
const userController = require('../controllers/userController');

app.use(express.json());

app.use(cors());

app.post('/login', userController.login);

app.listen(port);
console.log(`Api rodando na porta ${port}`);
