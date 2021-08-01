import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Item = styled(Link)`
  text-decoration: none;
`;

const CustomerNavbar = () => (
  <Navbar>
    <Item
      to="/customer/products"
      data-testid="customer_products__element-navbar-link-products"
    >
      Produtos
    </Item>
    <Item
      to="/customer/checkout"
      data-testid="customer_products__element-navbar-link-orders"
    >
      Meus pedidos
    </Item>
  </Navbar>
);

export default CustomerNavbar;
