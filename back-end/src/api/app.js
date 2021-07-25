const express = require('express');
const { userRoute } = require('./routes');
const success = require('../utils/success');
const handleError = require('../middlewares/errorHandler');

const app = express();

app.use(express.json());
app.use('/users', userRoute);
app.use(handleError);

app.get('/Ping', (_req, res) => res.status(success.OK).json({ message: 'Pong' }));

module.exports = app;
