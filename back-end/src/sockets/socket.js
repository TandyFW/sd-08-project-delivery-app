const { Server } = require('socket.io');

const server = require('../api/app');

const io = new Server(server, { cors: { origin: '*' } });

module.exports = io;
