const express = require('express');
const path = require('path');
const cors = require('cors');
const reqquireHttp = require('http');
const socketIo = require('socket.io');
const sock = require('../socket.io/sockets');
const { loginRoute, registerRoute, productsRoute, orderRoute } = require('./routes');
const handleError = require('../middlewares/errorHandler');

const SOCKET_PORT = process.env.SOCKET_PORT || 3002;
const app = express();
app.use(express());
const http = reqquireHttp.createServer(app);
const io = socketIo(http, {
    cors: {
      origin: '*', // url aceita pelo cors
      methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos aceitos pela url
    },
});

app.use(cors());
app.use(express.json());
app.use('/register', registerRoute);
app.use('/login', loginRoute);
app.use('/products', productsRoute);
app.use('/order', orderRoute);
app.use('/images', express.static(path.resolve(__dirname, '../../public/images')));
app.use(handleError);
app.all('*', (_req, res) => res.status(404).json({ message: 'Not Found' }));

io.on('connection', (socket) => {
    sock.ets(socket);
});
io.listen(SOCKET_PORT);
module.exports = app;