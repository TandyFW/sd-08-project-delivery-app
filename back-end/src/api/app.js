const express = require('express');
const path = require('path');
const cors = require('cors');

const handleErros = require('../middlewares/errorHandler');
const { usersRoute, customerRoute } = require('./routes');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/users', usersRoute);

app.use('/customer', customerRoute);

app.use(handleErros);

app.use('/images', express.static(path.resolve(__dirname, '../../public/images')));

app.all('*', (_req, res) => res.status(404).json({ message: 'Endpoint não existe' }));

module.exports = app;
