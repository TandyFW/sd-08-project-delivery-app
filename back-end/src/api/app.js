const express = require('express');
const cors = require('cors');
const path = require('path');
const middlewares = require('../middlewares');
const routes = require('../routes');

const app = express();

app.use(express.json());

app.use(express.static(path.resolve(__dirname, '..', '..', 'public')));

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT'],
}));

app.use('/', routes);

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(middlewares.error);

module.exports = app;
