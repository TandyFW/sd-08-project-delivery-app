const express = require('express');

const app = express();
app.use(express.json());
app.use('/images', express.useStatic(dirname + '/public'));
app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
