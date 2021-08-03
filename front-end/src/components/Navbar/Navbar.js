import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserContext from '../../context/UserContext';
import {
  StyledNavbar,
  Username,
  Exit,
  ChildrenWrapper,
} from '../../styles/components/Navbar/Navbar';

const Navbar = ({ className, children }) => {
  const { name } = useContext(UserContext);
  const history = useHistory();

  const handleExit = () => {
    localStorage.clear();
    history.push('/login');
  };

  return (
    <StyledNavbar className={ className }>
      <ChildrenWrapper>{ children }</ChildrenWrapper>
      <Username data-testid="customer_products__element-navbar-user-full-name">
        { name }
      </Username>
      <Exit
        onClick={ handleExit }
        data-testid="customer_products__element-navbar-link-logout"
      >
        Sair
      </Exit>
    </StyledNavbar>
  );
};

Navbar.defaultProps = {
  className: '',
};

Navbar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  className: PropTypes.string,
};

export default Navbar;
