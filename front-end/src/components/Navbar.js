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
          <li>
            <Link
              data-testid="customer_products__element-navbar-link-products"
              to="/customer/products"
            >
              Produtos
            </Link>
          </li>
          <li data-testid="customer_products__element-navbar-link-orders">
            <Link to="/customer/orders">
              Meus Pedidos
            </Link>
          </li>
          <li data-testid="customer_products__element-navbar-user-full-name">
            { name || ''}
          </li>
          <button
            data-testid="customer_products__element-navbar-link-logout"
            onClick={ logout }
            type="button"
          >
            Sair
          </button>
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
