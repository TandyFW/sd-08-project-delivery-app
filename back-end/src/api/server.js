const socket = require('socket.io');
const http = require('http');

const port = process.env.PORT || 3001;
const app = require('./app');

const httpServer = http.createServer(app);

const io = socket(httpServer, {
    cors: {
        origin: 'http://localhost:3001',
        methods: ['GET', 'POST'],
    },
});

require('./sockets/orderStatus')(io);

httpServer.listen(port);
console.log(`Api rodando na porta ${port}`);
