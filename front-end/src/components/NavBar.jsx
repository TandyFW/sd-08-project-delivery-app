import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from './Button';

function NavBar({ user }) {
  const prefix = 'customer_products__';
  const history = useHistory();
  const goToRoute = (route) => {
    history.push(route);
  };
  return (
    <div className="navBar-container">
      <Button
        label="Produtos"
        onClick={ () => goToRoute('/login') }
        datatestid={ `${prefix}element-navbar-link-products` }
      />
      <Button
        label="Meus Pedidos"
        onClick={ () => goToRoute('/login') }
        datatestid={ `${prefix}element-navbar-link-orders` }
      />
      <Button
        label={ user }
        onClick={ () => goToRoute('/login') }
        datatestid={ `${prefix}element-navbar-user-full-name` }
      />
      <Button
        label="Sair"
        onClick={ () => goToRoute('/login') }
        datatestid={ `${prefix}element-navbar-link-logout` }
      />
    </div>
  );
}
NavBar.propTypes = {
  user: PropTypes.string.isRequired,
};

export default NavBar;
