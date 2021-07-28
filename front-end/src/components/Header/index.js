import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { useHistory, Link } from 'react-router-dom';

import NavBar from './styled';

import { logout } from '../../services/auth';

const Header = ({ dinamicButtons = [] }) => {
  const history = useHistory();

  const [username, setUsername] = useState('');

  const getUserInfo = () => {
    const data = localStorage.getItem('user');
    if (data) {
      const { name } = JSON.parse(data);
      setUsername(name);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <NavBar>
      <nav>
        {/* renderiza dinamicamente a quantidade de Links que passarmos por props */}
        {dinamicButtons.map(({ name, link, testId }, i) => (
          <Link
            key={ i }
            to={ link }
            data-testid={ testId }
          >
            { name }
          </Link>)) }
      </nav>
      <div>
        <p
          data-testid="customer_products__element-navbar-user-full-name"
        >
          {username}
        </p>
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ () => logout(history) }
        >
          SAIR
        </button>
      </div>
    </NavBar>
  );
};

Header.propTypes = {
  dinamicButtons: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Header;
