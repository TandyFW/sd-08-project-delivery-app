const express = require('express');
const middlewares = require('../middlewares');

const app = express();

app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(middlewares.error);

module.exports = app;
