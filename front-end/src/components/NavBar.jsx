import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MenuItem, Menu } from '../styles/components/NavBar.styled';
import colors from '../styles/colors';

function NavBar({ user, show }) {
  const prefix = 'customer_products__';
  const history = useHistory();
  const goToRoute = (route) => {
    history.push(route);
  };
  const logout = () => {
    localStorage.removeItem('user');
    goToRoute('/login');
  };

  return (
    <Menu>
      <MenuItem
        color={ colors.mediumseagreen }
        onClick={ () => goToRoute('/login') }
        data-testid={ `${prefix}element-navbar-link-products` }
      >
        Produtos
      </MenuItem>
      <MenuItem
        show={ show }
        disabled={ show }
        color={ colors.teal }
        onClick={ () => goToRoute('/login') }
        data-testid={ `${prefix}element-navbar-link-orders` }
      >
        {!show && 'Meus Pedidos'}
      </MenuItem>
      <MenuItem
        color={ colors.indigo }
        onClick={ () => goToRoute('/login') }
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
  show: PropTypes.bool.isRequired,
};

export default NavBar;
