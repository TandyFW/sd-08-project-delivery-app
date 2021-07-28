import React from 'react';
import styled from 'styled-components';
import useCounter from '../hooks/useCounter';

const Wrapper = styled.div`
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

const Action = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.lightText};
  cursor: pointer;
  font-size: 3rem;
  font-weight: 700;
  user-select: none;
`;

const Count = styled.input.attrs(() => ({
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

const Counter = () => {
  const [count, setCount, increment, decrement] = useCounter();

  return (
    <Wrapper>
      <Action onClick={ decrement }>-</Action>
      <Count value={ count } onChange={ ({ target }) => setCount(target.value) } />
      <Action onClick={ increment }>+</Action>
    </Wrapper>
  );
};

export default Counter;
