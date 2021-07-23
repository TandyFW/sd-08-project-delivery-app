const express = require('express');

const app = express();

const STATUS_OK = 200;

app.use(express.json());

app.get('/Ping', (_req, res) => res.status(STATUS_OK).json({ message: 'Pong' }));

module.exports = app;
