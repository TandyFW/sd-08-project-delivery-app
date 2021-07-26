require('dotenv').config();
const express = require('express');
const cors = require('cors');

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

const errorMiddleware = require('../database/middlewares/errorMiddleware');
const productsRouter = require('../database/routes/products');

app.use(express.json());
app.use('/products', productsRouter);
app.use(errorMiddleware);

app.get('/coffee', (_req, res) => res.status(418).end());

const PORT = process.env.SOCKET_PORT || 3002;
http.listen(PORT, () => console.log(`Socket na porta ${PORT}`));
module.exports = app; 
