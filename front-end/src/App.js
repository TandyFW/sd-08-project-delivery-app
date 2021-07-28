import React from 'react';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import mainTheme from './styles/themes/main';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={ mainTheme }>
        <Routes />
      </ThemeProvider>
    </>
  );
}

export default App;
