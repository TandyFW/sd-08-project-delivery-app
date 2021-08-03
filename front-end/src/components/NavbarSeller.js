import React from 'react';
import { useHistory } from 'react-router-dom';
import PropType from 'prop-types';

function NavbarSeller({ nome }) {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.clear();
    history.push('/login');
  };

  return (
    <header>
      <nav>
        <ul>
          <li>Pedidos</li>
          <li>{ nome }</li>
          <button
            type='button'
            data-testid="customer_products__element-navbar-link-logout"
            onClick={ handleLogout }
          >
            Sair
          </button>
        </ul>
      </nav>
    </header>
  );
}

NavbarSeller.propTypes = {
  nome: PropType.string.isRequired,
};

export default NavbarSeller;
