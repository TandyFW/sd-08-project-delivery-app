import React from 'react';
import AddressDetails from '../../components/AddressDetails';
import CheckoutTable from '../../components/CheckoutTable/index';
import './styles.css';

function CustomerCheckout() {
  return (
    <div className="main-wrapper-checkout">
      <div>
        <h3>Finalizar Pedido</h3>
        <CheckoutTable />
      </div>
      <div>
        <h3>Detalhes e Endereço para Entrega</h3>
        <AddressDetails />
      </div>
    </div>
  );
}

export default CustomerCheckout;
