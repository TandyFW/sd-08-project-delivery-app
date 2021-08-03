// import Chat from "./chat/chat";
// import Process from "./process/process";
import React from 'react';
import socketClient from 'socket.io-client';

const SOCKETport = 3002;
const tree = 3;
const SOCKET_PORT = process.env.SOCKET_PORT || SOCKETport;
// import Home from './Home';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import "./App.scss";

// const ioio = io();
// console.log(socket, ioio);

class Sockets extends React.Component {
  render() {
    const socket = socketClient(`http://localhost:${SOCKET_PORT}`);
    return (
      <div className="homepage">
        <h1>Welcome to ChatApp</h1>

        <button
          type="button"
          onClick={ () => socket.emit('hello', tree) }
        >
          hello 3
        </button>
        <button
          type="button"
          onClick={ () => socket.emit('hello', 2) }
        >
          hello 2
        </button>
        <button
          type="button"
          onClick={ () => socket.emit('make', {
            sellerId: '2', userId: '3', state: 'Pendente' }) }
        >
          Pendente

        </button>
        <button
          type="button"
          onClick={ () => socket.emit('make', {
            sellerId: '2', userId: '3', state: 'Preparando' }) }
        >
          Preparando

        </button>
        <button
          type="button"
          onClick={ () => socket.emit('make', {
            sellerId: '2', userId: '3', state: 'Em Trânsito' }) }
        >
          Em Trânsito

        </button>
        <button
          type="button"
          onClick={ () => socket.emit('make', {
            sellerId: '2', userId: '3', state: 'Entregue' }) }
        >
          Entregue

        </button>
      </div>
    );
  }
}
export default Sockets;
// export default App;
