import React, { useContext } from 'react';
import AddressDetails from '../../components/AddressDetails';
import CheckoutTable from '../../components/CheckoutTable/index';
import Context from '../../context/Context';
import './styles.css';

function CustomerCheckout() {
  const { cart } = useContext(Context);
  return (
    <div className="main-wrapper-checkout">
      <div>
        <h3>Finalizar Pedido</h3>
        <CheckoutTable cart={ cart } />
      </div>
      <div>
        <h3>Detalhes e Endereço para Entrega</h3>
        <AddressDetails cart={ cart } />
      </div>
    </div>
  );
}

export default CustomerCheckout;
