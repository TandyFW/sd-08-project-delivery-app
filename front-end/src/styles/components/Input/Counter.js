import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  border-radius: 10px;
  display: inline-grid;
  grid-template-columns: 1fr 1.5fr 1fr;
  max-width: 200px;
  overflow: hidden;
  width: 100%;

  * {
    padding: 5px;
    text-align: center;
  }
`;

export const Action = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  color: ${({ theme }) => theme.colors.lightText};
  cursor: pointer;
  font-size: 3rem;
  font-weight: 700;
  user-select: none;
`;

export const Count = styled.input.attrs(() => ({
  type: 'number',
}))`
  align-items: center;
  border: 2px solid #001813;
  color: #828282;
  display: flex;
  font-size: 2rem;
  height: 100%;
  justify-content: center;
  text-align: center;
  width: 100%;

  &::-webkit-outer-spin-button, &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
`;
