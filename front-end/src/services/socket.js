import socketClient from 'socket.io-client';

const SOCKETport = 3001;
const SOCKET_PORT = process.env.SOCKET_PORT || SOCKETport;

const socket = socketClient(`http://localhost:${SOCKET_PORT}`);

export function hello(id) {
  socket.emit('hello', id);
}

export function make(sellerId, userId, state) {
  socket.emit('make', { sellerId, userId, state });
}

export function status() {
  socket.on('state', result);
  return result;
}
