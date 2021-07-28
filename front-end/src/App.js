import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Routes from './Routes';
import ConxtextProvider from './context';
import theme from './theme';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <ConxtextProvider>
        <Routes />
      </ConxtextProvider>
    </ThemeProvider>
  );
}

export default App;
