import { useState } from 'react';

const useLocalStorage = (key, initialValue = '') => {
  const [item, setItem] = useState(() => {
    localStorage.setItem(key, initialValue);
    return initialValue;
  });

  const updateItem = (newItem) => {
    localStorage.setItem(key, newItem);
    setItem(newItem);
  };

  return [item, updateItem];
};

export default useLocalStorage;
