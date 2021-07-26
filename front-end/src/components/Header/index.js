import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import NavBar from './styled';

const Header = ({ dinamicButtons = [] }) => (
  <NavBar>
    <nav>
      {/* renderiza dinamicamente a quantidade de Links que passarmos por props */}
      {dinamicButtons.map(({ name, link }, i) => (
        <Link key={ i } to={ link }>{ name }</Link>)) }
    </nav>
    <div>
      <p>{'<NOME DE USUARIO>'}</p>
      <button type="button">
        SAIR
      </button>
    </div>
  </NavBar>
);

Header.propTypes = {
  dinamicButtons: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Header;
