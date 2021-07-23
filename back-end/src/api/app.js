const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const http = require('http').createServer(app);

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  },
});

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(`${__dirname}/public`));

// require('./sockets/')(io);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
