const express = require('express');
const path = require('path');
const cors = require('cors');
const { loginRoute, userRoute, customerRoute } = require('./routes');
const handleError = require('../middlewares/errorHandler');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/login', loginRoute);
app.use('/users', userRoute);
app.use('/customer', customerRoute);
app.use('/images', express.static(path.resolve(__dirname, '../../public/images')));
app.use(handleError);
app.all('*', (_req, res) => res.status(404).json({ message: 'Not Found' }));

module.exports = app;
