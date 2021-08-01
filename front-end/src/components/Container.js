import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid #b1c2be;
  box-shadow: 0 4px 3px 2px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  padding: 25px;

  > *:not( :last-child ) {
    margin-bottom: 25px;
  }
`;

const Container = ({ className, children }) => (
  <Wrapper className={ className }>
    { children }
  </Wrapper>
);

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  className: PropTypes.string.isRequired,
};

export default Container;
