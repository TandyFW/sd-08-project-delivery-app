const express = require('express');
const path = require('path');

const app = express();

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/images', express.static(path.join(__dirname, '..', '..', 'public', 'images')));
// Iniciando PR principal do grupo

module.exports = app;
