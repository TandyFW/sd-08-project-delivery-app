const express = require('express');
const { Sales, Products } = require('../database/models');

const app = express();

app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());

app.get('/test', async (req, res) => {
  const resposta = await Products.findOne({ include: [
    { model: Sales, as: 'sales' },
  ] });
  res.status(200).json({ resposta });
});

module.exports = app;
