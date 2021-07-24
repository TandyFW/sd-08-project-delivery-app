const express = require('express');
const path = require('path');
const { usersRoute, customerRoute } = require('./routes');
const handleErros = require('../middlewares/errorHandler');

const app = express();

app.use(express.json());

app.use('/users', usersRoute);

app.use('/customer', customerRoute);

app.use(handleErros);

app.use('/images', express.static(path.resolve(__dirname, '../../public/images')));

app.all('*', (_req, res) => res.status(404).json({ message: 'Endpoint não existe' }));

module.exports = app;
