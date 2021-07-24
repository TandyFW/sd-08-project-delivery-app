require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// const socketServer = require('socket.io');

const app = express();
const http = require('http').createServer(app);
const routes = require('../routes/router');
const errorMiddleware = require('../middlewares/error');

const allowCors = require('../config/cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(allowCors);

app.use(express.static(path.join(__dirname, '..', '..', 'public')));

// const io = socketServer(http, {
//   cors: {
//     origin: 'http://localhost:3000/',
//     methods: ['GET', 'POST', 'PUT'],
//   },
// });

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(routes);
app.use(errorMiddleware);

module.exports = http;
