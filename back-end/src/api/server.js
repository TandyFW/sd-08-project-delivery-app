const httpServer = require('http').createServer(require('./app'));

const io = require('socket.io')(httpServer, {
    cors: {
      origin: 'http://localhost:3000',
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
    },
});

const socket = require('./socket');

socket.delivery(io);

const PORT = 3001;

httpServer.listen(PORT, () => console.log(`Listening on port ${PORT}`));