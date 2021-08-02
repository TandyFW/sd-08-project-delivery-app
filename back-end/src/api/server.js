const cors = require('cors');
const express = require('express');
// const socket = require('socket.io');

const port = process.env.PORT || 3001;
// const socketPort = 3002;
const app = require('./app');
const routes = require('./router/routes');

app.use(express.json());

app.use(express.static(`${__dirname}/../../public`));

app.use(cors());

app.use('/delivery', routes);

app.listen(port, () => console.log(`Api rodando na porta ${port}`));

// const server = app.listen(socketPort,
//   () => console.log(`Socket aberto na porta ${socketPort}`));

// io = socket(server);

// io.on('connection', (socket) => {
//   console.log(`Usuário de ID ${socket.id} logou.`);

//   socket.on('disconnect', () => console.log(`Usuário ${socket.id} desconectou.`));
// });
