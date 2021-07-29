import { useState } from 'react';

const useCounter = ({ initialState = 0, ammount = 1 } = {}) => {
  const [count, setCount] = useState(initialState);

  const increment = () => {
    setCount(count + ammount);
  };

  const decrement = () => {
    setCount(Math.max(0, count - ammount));
  };

  const updateCount = (value) => {
    const newCount = Number(value);
    if (!Number.isNaN(newCount)) {
      setCount(newCount);
    }
  };

  return [count, updateCount, increment, decrement];
};

export default useCounter;
