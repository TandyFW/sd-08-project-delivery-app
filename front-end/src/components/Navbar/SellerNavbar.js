import React from 'react';
import Navbar from './Navbar';
import Item from '../../styles/components/Navbar/SellerNavbar';

const SellerNavbar = () => (
  <Navbar>
    <Item
      to="/seller/orders"
      data-testid="customer_products__element-navbar-link-orders"
    >
      Pedidos
    </Item>
  </Navbar>
);

export default SellerNavbar;
