const { Server } = require('socket.io');
const http = require('http');
const app = require('./app');

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*',
  },
});
require('../sockets')(io);

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => console.log(`Api rodando na porta ${PORT}`));
