const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const md5 = require('md5');
const Sequelize = require('sequelize');
const { Op } = Sequelize;
const { Sales, Products, Users } = require('../database/models');

const app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cors());
app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());

app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  const user = await Users.findOne({
    where: { email: email },
  });
  const md5pass = md5(password);
  if (!user) {
    await Users.create({ name, email, password: md5pass, role: 'costumer' });
    return res.status(201).json('Created');
  }
  return res.status(409).json('Conflict')
});

module.exports = app;
