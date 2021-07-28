require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const {
  sessionsRouter,
  customerRouter,
  registerRouter,
} = require('../routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));

app.use('/login', sessionsRouter);
app.use('/customer', customerRouter);
app.use('/register', registerRouter);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
