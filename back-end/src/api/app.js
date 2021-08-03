const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const http = require('http').createServer();
const io = require('socket.io')(http, {
  cors: {
    origin: [
      'http://localhost:3000',
    ],
    methods: ['POST', 'GET'],
  },
});

const {
  sessionsRouter,
  customersRouter,
  registerRouter,
  adminRouter,
  sellersRouter,
} = require('../routes');

require('./socket/order')(io);

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve('public')));

app.use('/login', sessionsRouter);
app.use('/seller', sellersRouter);
app.use('/customer', customersRouter);
app.use('/register', registerRouter);
app.use('/admin', adminRouter);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = {
  app,
  io,
};
