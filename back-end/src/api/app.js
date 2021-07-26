require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Users } = require('../database/models');
const md5 = require('md5');
const sessionsRouter = require('../routes/sessionsRouter');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/login', sessionsRouter);
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
