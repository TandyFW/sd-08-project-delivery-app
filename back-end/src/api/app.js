const express = require('express');
const middlewares = require('../middlewares');
const routes = require('../routes');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors({
  origin: '*',
  methods: ['POST', 'GET']
}));

app.use('/', routes);

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(middlewares.error);

module.exports = app;
