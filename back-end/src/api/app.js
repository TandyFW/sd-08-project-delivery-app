const express = require('express');
const { usersRoute } = require('./routes');
const Success = require('../utils/success');

const app = express();

app.use(express.json());
app.use('/users', usersRoute);

app.get('/Ping', (_req, res) => res.status(Success.OK).json({ message: 'Pong' }));

module.exports = app;
