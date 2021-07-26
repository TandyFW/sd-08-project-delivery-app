import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ name }) => (
  <header>
    <nav>
      <ul>
        <Link to="/customer/products"><li>Produtos</li></Link>
        <Link to="/customer/orders"><li>Pedidos</li></Link>
        <li>{ name }</li>
        <li>Logout</li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
