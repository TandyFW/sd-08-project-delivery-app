const express = require('express');
const cors = require('cors');
const http = require('http');
const socketio = require('socket.io');
const { loginRoute, registerByAdminRoute, productRoute, registerRoute } = require('./routes');
const { errorHandler } = require('./middlewares');
const socketEvents = require('./socketEvents');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
  socketEvents.orders(socket, io);
});

app.use(express.json());
app.use(cors());

app.use('/images', express.static('public'));

app.use(loginRoute);
app.use(registerByAdminRoute);
app.use(productRoute);
app.use(registerRoute);
app.get('/coffee', (_req, res) => res.status(418).end());

app.use(errorHandler);

module.exports = server;
