import React from 'react';
import styled, { css } from 'styled-components';

const StyledLabel = styled.label`
  display: inline-flex;
  flex-direction: column;
  font-size: 1.5rem;

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

export default Label;
