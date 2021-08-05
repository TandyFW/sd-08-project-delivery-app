import React from 'react';
import PropTypes from 'prop-types';
import StyledListContainer from '../../styles/components/List/ListContainer';

const ListContainer = ({ children, ...props }) => (
  <StyledListContainer { ...props }>
    { children }
  </StyledListContainer>
);

ListContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default ListContainer;
