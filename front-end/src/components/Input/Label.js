import React from 'react';
import PropTypes from 'prop-types';
import StyledLabel from '../../styles/components/Input/Label';

const Label = ({ children, text, ...props }) => (
  <StyledLabel { ...props }>
    <span>{ text }</span>
    { children }
  </StyledLabel>
);

Label.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default Label;
