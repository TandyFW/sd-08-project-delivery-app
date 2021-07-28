import React from 'react';
import Navbar from '../components/Navbar';

function Products() {
  return (
    <>
      <Navbar>
        <div data-testid="customer_products__element-navbar-link-products">Produtos</div>
        <div data-testid="customer_products__element-navbar-link-orders">
          Meus pedidos
        </div>
      </Navbar>
      <div>Produtos</div>
    </>
  );
}

export default Products;
