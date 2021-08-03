// import Chat from "./chat/chat";
// import Process from "./process/process";
import socketClient from 'socket.io-client';
import React from 'react';

const SOCKETport = 3002;
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
          onClick={ () => socket.emit('ping') }
        >
          Join

        </button>

      </div>
    );
  }
}
export default Sockets;
// export default App;
