require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Sales, Products } = require('../database/models');
const { sessionsRouter, customer } = require('../routes');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')))

app.use('/login', sessionsRouter);
app.use('/customer', customer);

app.get('/coffee', (_req, res) => res.status(418).end());

app.get('/test', async (req, res) => {
  const resposta = await Products.findOne({ include: [
    { model: Sales, as: 'sales' },
  ] });
  res.status(200).json({ resposta });
});

module.exports = app;
