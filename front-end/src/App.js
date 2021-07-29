import React from 'react';
import Routes from './routers';
import './App.css';
import { GlobalProvider } from './context/GlobalProvider';

function App() {
  return (
    <GlobalProvider>
      <Routes />
    </GlobalProvider>
  );
}

export default App;
