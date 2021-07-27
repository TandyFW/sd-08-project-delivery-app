import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ name }) => {
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem('user');
    history.push('/login');
  };

  return (
    <header>
      <nav>
        <ul>
          <Link to="/customer/products">
            <li
              data-testid="customer_products__element-navbar-link-products"
            >
              Produtos
            </li>
          </Link>
          <Link to="/customer/orders">
            <li
              data-testid="customer_products__element-navbar-link-orders"
            >
              Meus Pedidos
            </li>
          </Link>
          <li
            data-testid="customer_products__element-navbar-user-full-name"
          >
            { name || ''}
          </li>
          <li
            data-testid="customer_products__element-navbar-link-logout"
          >
            <button
              onClick={ logout }
              type="button"
            >
              Sair
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Navbar.propTypes = {
  name: PropTypes.string,
};

Navbar.defaultProps = {
  name: '',
};

export default Navbar;
