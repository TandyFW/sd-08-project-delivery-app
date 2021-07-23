require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const socketServer = require('socket.io');

const app = express();
const path = require('path');
const http = require('http').createServer(app);

const allowCors = require('../config/cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(allowCors);

app.use(express.static(path.join(__dirname, '..', '..', 'public')));

const io = socketServer(http, {
  cors: {
    origin: 'http://localhost:3000/',
    methods: ['GET', 'POST', 'PUT'],
  },
});

app.get('/coffee', (_req, res) => res.status(418).end());
app.get('/test', (req, res) => {
  res.status(200).json('OK');
});

module.exports = http;
