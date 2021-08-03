import { io } from 'socket.io-client';

const socket = (token) => io('http://localhost:3002', {
  extraHeaders: {
    authorization: token,
  },
});

export default socket;
