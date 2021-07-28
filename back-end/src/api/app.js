const express = require('express');
const cors = require('cors');
const sessionsRouter = require('../routes/sessionsRouter');
const customersRouter = require('../routes/customersRouter');
const sellersRouter = require('../routes/sellersRouter');
const registerRouter = require('../routes/registerRouter');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/login', sessionsRouter);
app.use('/seller', sellersRouter);
app.use('/customer', customersRouter);
app.use('/register', registerRouter);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
