import React from 'react';
import './App.css';
import Provider from './ContextApi/Provider';
import Routes from './Routes';

function App() {
  return (
    <Provider>
      <Routes />
    </Provider>
  );
}

export default App;
