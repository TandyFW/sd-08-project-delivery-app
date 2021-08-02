import styled from 'styled-components';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import DeliveryContext from '../context/DeliveryContext';

const StyledNavbar = styled.nav`
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
`;

const Username = styled.p`
  background-color: ${({ theme }) => theme.colors.tertiary};
  color: white;
  font-size: 1.5rem;
  margin-left: auto;
  padding: 20px;
`;

const Exit = styled.p`
  background-color: ${({ theme }) => theme.colors.quaternary};
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 20px;
`;

const ChildrenWrapper = styled.div`
  display: flex;

  > * {
    align-items: center;
    color: white;
    display: flex;
    font-weight: 700;
    justify-content: center;
    padding: 20px;
    text-transform: uppercase;
  }
`;

const NavbarOrder = ({ className, children }) => {
  const { name } = useContext(DeliveryContext);

  return (
    <StyledNavbar className={ className }>
      <ChildrenWrapper>{ children }</ChildrenWrapper>
      <Username>
        { name }
      </Username>
      <Exit>
        Sair
      </Exit>
    </StyledNavbar>
  );
};

NavbarOrder.defaultProps = {
  className: '',
};

NavbarOrder.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  className: PropTypes.string,
};

export default NavbarOrder;
