import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { getUserInfo } from '../../service/getLocalStorage';
import { Container, LeftItem, RightItem } from './NavBar.styled';

export default function NavBar({ label, text }) {
  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    history.push('/login');
  };

  const goToMyOrders = () => {
    history.push('/customer/orders');
  };

  const goToProducts = () => {
    history.push('/customer/products');
  };

  return (
    <Container>
      <LeftItem>
        <li data-testid="customer_products__element-navbar-link-products">
          <button type="button" onClick={ goToProducts }>
            {label}
          </button>
        </li>
        { text ? (
          <li data-testid="customer_products__element-navbar-link-orders">
            <button onClick={ goToMyOrders } type="button">
              {text}
            </button>
          </li>
        ) : '' }
      </LeftItem>
      <RightItem>
        <li data-testid="customer_products__element-navbar-user-full-name">
          {getUserInfo().name}
        </li>
        <li data-testid="customer_products__element-navbar-link-logout">
          <button onClick={ logout } type="button">
            Sair
          </button>
        </li>
      </RightItem>
    </Container>
  );
}

NavBar.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
