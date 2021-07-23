import React from 'react';
import Routes from './routes';
import ConxtextProvider from './context';
import './App.css';

function App() {
  return (
    <ConxtextProvider>
      <Routes />
    </ConxtextProvider>
  );
}

export default App;
