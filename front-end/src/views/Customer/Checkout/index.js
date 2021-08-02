import React, { useContext } from 'react';
import AddressDetails from '../../../components/AddressDetails';
import CheckoutTable from '../../../components/CheckoutTable/index';
import Context from '../../../context/Context';
import NavBar from '../../Components/NavBar';
import './styles.css';

function CustomerCheckout() {
  const { cart, setCart, userData } = useContext(Context);
  return (
    <div className="main-wrapper-checkout">
      <NavBar
        userType={ userData.role }
        userName={ userData.name }
      />
      <div>
        <h3>Finalizar Pedido</h3>
        <CheckoutTable cart={ cart } setCart={ setCart } />
      </div>
      <div>
        <h3>Detalhes e Endereço para Entrega</h3>
        <AddressDetails cart={ cart } setCart={ setCart } />
      </div>
    </div>
  );
}

export default CustomerCheckout;
