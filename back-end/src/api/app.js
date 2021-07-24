const express = require('express');
const { usersRoute, customerRoute } = require('./routes');
const Success = require('../utils/success');
const handleErros = require('../middlewares/errorHandler');

const app = express();

app.use(express.json());

app.use('/users', usersRoute);

app.use('/customer', customerRoute);

app.use(handleErros);

const path = require('path');

app.use('/images', express.static(path.resolve(__dirname, '../../public/images')));

app.all('*', (_req, res) => res.status(404).json({ message: 'Endpoint não existe' }));

module.exports = app;
