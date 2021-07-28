import { useState } from 'react';

const useCounter = ({ initialState = 0, ammount = 1 } = {}) => {
  const [count, setCount] = useState(initialState);

  const increment = () => {
    setCount(count + ammount);
  };

  const decrement = () => {
    setCount(Math.max(0, count - ammount));
  };

  const _setCount = (value) => {
    const newCount = Number(value);
    console.log(newCount);
    if (!isNaN(newCount)) {
      setCount(newCount);
    }
  };

  return [count, _setCount, increment, decrement];
}

export default useCounter;
