import React from 'react';
import AddressDetails from '../../components/AddressDetails';
import './styles.css';

function CustomerCheckout() {
  return (
    <div className="main-wrapper-checkout">
      <div>
        <h3>Detalhes e Endereço para Entrega</h3>
        <AddressDetails />
      </div>
    </div>
  );
}

export default CustomerCheckout;
