import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MenuItem, Menu } from '../styles/components/NavBar.styled';
import colors from '../styles/colors';

function NavBar({ user, show }) {
  const prefix = 'customer_products__';
  const history = useHistory();
  const getUser = JSON.parse(localStorage.getItem('user'));
  const goToRoute = () => {
    history.push(`/${getUser.role}/orders`);
  };
  const logout = () => {
    localStorage.removeItem('user');
    history.push('/login');
  };

  return (
    <Menu>
      <MenuItem
        color={ colors.mediumseagreen }
        onClick={ () => history.push('/customer/products') }
        data-testid={ `${prefix}element-navbar-link-products` }
      >
        Produtos
      </MenuItem>
      <MenuItem
        show={ show }
        disabled={ show }
        color={ colors.teal }
        onClick={ () => goToRoute() }
        data-testid={ `${prefix}element-navbar-link-orders` }
      >
        {!show && 'Meus Pedidos'}
      </MenuItem>
      <MenuItem
        color={ colors.indigo }
        onClick={ () => history.push('/login') }
        data-testid={ `${prefix}element-navbar-user-full-name` }
      >
        {user}
      </MenuItem>
      <MenuItem
        color={ colors.dodgerblue }
        onClick={ () => logout() }
        data-testid={ `${prefix}element-navbar-link-logout` }
      >
        Sair
      </MenuItem>
    </Menu>
  );
}
NavBar.propTypes = {
  user: PropTypes.string.isRequired,
  show: PropTypes.bool,
};
NavBar.defaultProps = {
  show: false,
};

export default NavBar;
