import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const StyledLabel = styled.label`
  align-items: center;
  display: inline-flex;
  flex-direction: column;
  font-size: 1.5rem;
  justify-content: center;

  span {
    margin-bottom: 10px;
    ${(props) => {
    if (props.centered) {
      return css`
        text-align: center;
      `;
    }
    return css`
        margin-left: 15px;
    `;
  }}
  }
`;

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
