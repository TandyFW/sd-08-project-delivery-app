import React from 'react';
import InputCheckout from '../components/InputCheckout';
import TableCheckout from '../components/TableCheckout';

export default function CustomerCheckout() {
  return (
    <div>
      <h1>Finalizar Pedido</h1>
      <TableCheckout />
      <InputCheckout />
    </div>
  );
}
