import React from 'react';
import { Link } from 'react-router-dom';

const Checkout = () => (
  <div>
    Checkout
    <Link to="/customer/orders/1">
      <button type="button">Finalizar Pedido</button>
    </Link>
  </div>
);

export default Checkout;
