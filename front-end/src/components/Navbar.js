import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const StyledNavbar = styled.nav`
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
`;

const Username = styled.p`
  background-color: ${({ theme }) => theme.colors.tertiary};
  color: white;
  margin-left: auto;
  padding: 20px;
`;

const Exit = styled.p`
  background-color: ${({ theme }) => theme.colors.quaternary};
  color: white;
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

const Navbar = ({ className, children }) => (
  <StyledNavbar className={ className }>
    <ChildrenWrapper>{ children }</ChildrenWrapper>
    <Username>Paulo Simões</Username>
    <Exit>Sair</Exit>
  </StyledNavbar>
);

Navbar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  className: PropTypes.string.isRequired,
};

export default Navbar;
