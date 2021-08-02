import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from '../styles/components/Container';

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
