import socketio from 'socket.io-client';

const SOCKETport = 3002;
const SOCKET_PORT = process.env.SOCKET_PORT || SOCKETport;

export const socket = socketio.connect(SOCKET_PORT);
export const SocketContext = React.createContext();
