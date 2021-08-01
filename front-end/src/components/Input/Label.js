import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const StyledLabel = styled.label`
  align-items: center;
  display: inline-flex;
  flex: 1;
  flex-direction: column;
  font-size: 1.5rem;
  justify-content: center;

  span {
    padding-bottom: 10px;
    width: 100%;

    ${(props) => {
    if (props.centered) {
      return css`
        text-align: center;
      `;
    }
    return css`
      padding-left: 20px;
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
