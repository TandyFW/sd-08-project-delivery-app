import React from 'react';
import ReactDOM from 'react-dom';
import { DeliveryProvider } from './context/UserContext';
import { CartProvider } from './context/CartContext';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <DeliveryProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </DeliveryProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
