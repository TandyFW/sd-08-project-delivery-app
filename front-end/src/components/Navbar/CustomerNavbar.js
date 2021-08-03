import React from 'react';
import Navbar from './Navbar';
import Item from '../../styles/components/Navbar/CustomerNavbar';

const CustomerNavbar = () => (
  <Navbar>
    <Item
      to="/customer/products"
      data-testid="customer_products__element-navbar-link-products"
    >
      Produtos
    </Item>
    <Item
      to="/customer/orders"
      data-testid="customer_products__element-navbar-link-orders"
    >
      Meus pedidos
    </Item>
  </Navbar>
);

export default CustomerNavbar;
