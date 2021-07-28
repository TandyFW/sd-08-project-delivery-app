import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import './NavBar.css';
import getLocalStorage from '../../service/getLocalStorage';
import clearLocalStorage from '../../service/clearLocalStorage';

export default function NavBar({ screen }) {
  const history = useHistory();
  const logout = () => {
    clearLocalStorage();
    history.push('/login');
  };

  return (
    <ul>
      <li data-testid="customer_products__element-navbar-link-products">{ screen }</li>
      <li data-testid="customer_products__element-navbar-link-orders">Meus Pedidos</li>
      <li
        data-testid="customer_products__element-navbar-user-full-name"
      >
        { getLocalStorage().name }
      </li>
      <li>
        <button
          onClick={ logout }
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
        >
          Sair
        </button>
      </li>
    </ul>
  );
}

NavBar.propTypes = {
  screen: PropTypes.string.isRequired,
};
