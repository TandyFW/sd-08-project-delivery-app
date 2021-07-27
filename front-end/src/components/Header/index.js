import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import NavBar from './styled';

const Header = ({ dinamicButtons = [] }) => {
  const [username, setUsername] = useState('');

  const getUserInfo = () => {
    const { name } = JSON.parse(localStorage.getItem('user'));
    setUsername(name);
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
