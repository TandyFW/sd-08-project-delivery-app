import styled, { css } from 'styled-components';

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

export default StyledLabel;
