require('dotenv').config();
const cors = require('cors');
const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const port = process.env.PORT || 3001;
const socketPort = process.env.SOCKET_PORT || 3002;
const app = require('./app');
const routes = require('./router/routes');

app.use(express.json());

app.use(express.static(`${__dirname}/../../public`));

app.use(cors());

app.use('/delivery', routes);

app.listen(port, () => console.log(`Api rodando na porta ${port}`));

const server = http.createServer(app);

const io = socketio(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  }
});

io.on('connection', (socket) => {
  console.log(`Usuário de ID ${socket.id} logou.`);
  
  socket.on('statusUpdate', ({ status, position }) => {
    socket.broadcast.emit('statusUpdate', status);
    socket.broadcast.emit('orders', { status, position });
  });
  
  socket.on('disconnect', () => console.log(`Usuário ${socket.id} desconectou.`));
});

server.listen(socketPort, 'localhost',
  () => console.log(`Socket aberto na porta ${socketPort}`));
