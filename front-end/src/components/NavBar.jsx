import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MenuItem, Menu } from '../styles/components/NavBar.styled';
import colors from '../styles/colors';

function NavBar({ user }) {
  const prefix = 'customer_products__';
  const history = useHistory();
  const goToRoute = (route) => {
    history.push(route);
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
        color={ colors.teal }
        onClick={ () => goToRoute('/login') }
        data-testid={ `${prefix}element-navbar-link-orders` }
      >
        Meus Pedidos
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
        onClick={ () => goToRoute('/login') }
        data-testid={ `${prefix}element-navbar-link-logout` }
      >
        Sair
      </MenuItem>
    </Menu>
  );
}
NavBar.propTypes = {
  user: PropTypes.string.isRequired,
};

export default NavBar;
