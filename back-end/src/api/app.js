require('dotenv').config();
const express = require('express');
const cors = require('cors');
// const Products = require('../routes/products');

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

// app.use('/products', Products);

app.get('/coffee', (_req, res) => res.status(418).end());

const PORT = process.env.SOCKET_PORT || 3002;
http.listen(PORT, () => console.log(`Socket na porta ${PORT}`));
module.exports = app;
