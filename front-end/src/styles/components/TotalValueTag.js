import styled, { css } from 'styled-components';

const StyledTotalValueTag = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 10px;
  bottom: 20px;
  color: white;
  cursor: pointer;
  font-size: 2rem;
  font-weight: 700;
  padding: 10px;
  ${(props) => {
    if (props.absolute) {
      return css`
        position: absolute;
      `;
    }
    return css`
      position: fixed;
    `;
  }}
  right: 20px;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }
`;

export default StyledTotalValueTag;
