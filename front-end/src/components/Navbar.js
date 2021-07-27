import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ name }) => (
  <header>
    <nav>
      <ul>
        <Link to="/customer/products">
          <li data-testid="customer_products__element-navbar-link-products">Produtos</li>
        </Link>
        <Link to="/customer/orders">
          <li data-testid="customer_products__element-navbar-link-orders">Meus Pedidos</li>
        </Link>
        <li data-testid="customer_products__element-navbar-user-full-name">{ name || ""}</li>
        <li data-testid="customer_products__element-navbar-link-logout" onClick={() => localStorage.removeItem('user')}> Sair</li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
