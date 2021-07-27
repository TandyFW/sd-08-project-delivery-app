import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [item, setItem] = useState(() => {
    if (initialValue) {
      localStorage.setItem(key, initialValue);
      return initialValue;
    }
    return localStorage.getItem(key);
  });

  const updateItem = (newItem) => {
    localStorage.setItem(key, newItem);
    setItem(newItem);
  };

  return [item, updateItem];
};

export default useLocalStorage;
