import React from 'react';
import Navbar from '../components/Navbar';

function OrderDetails() {
  return (
    <>
      <Navbar>
        <div data-testid="customer_products__element-navbar-link-products">
          Produtos
        </div>
        <div data-testid="customer_products__element-navbar-link-orders">
          Meus pedidos
        </div>
      </Navbar>
      <div>Detalhes do pedido</div>
    </>
  );
}

export default OrderDetails;
