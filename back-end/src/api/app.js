const express = require('express');
const cors = require('cors');
const routes = require('../routes');
const errorMiddleware = require('../middlewares/errorMiddleware');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  }));

app.get('/coffee', (_req, res) => res.status(418).end());
app.use(routes);
app.use(errorMiddleware);

module.exports = app;
