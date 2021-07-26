require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());

const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    methods: ['GET', 'POST'],
    origin: 'http://localhost:3000',
  },
});

require('../sockets/socket')(io);
const Users = require('../database/routes/users');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/users', Users);

/* app.get('/coffee', (_req, res) => res.status(418).end()); */

const PORT = process.env.SOCKET_PORT || 3002;
http.listen(PORT, () => console.log(`Socket na porta ${PORT}`));
module.exports = app;
