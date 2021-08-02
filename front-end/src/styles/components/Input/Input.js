import styled, { css } from 'styled-components';

const Input = styled.input`
  border: 1px solid #001813;
  border-radius: 5px;
  font-size: 1.5rem;
  padding: 15px;
  width: 100%;

  &::placeholder {
    color: #828282;
    ${({ type }) => type === 'password' && css`
      transform: translateY(5px);
    `}
  }
`;

export default Input;
