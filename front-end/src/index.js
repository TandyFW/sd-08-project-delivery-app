import React from 'react';
import ReactDOM from 'react-dom';
import DeliveryProvider from './context/Provider';

ReactDOM.render(
  <React.StrictMode>
    <DeliveryProvider />
  </React.StrictMode>,
  document.getElementById('root'),
);