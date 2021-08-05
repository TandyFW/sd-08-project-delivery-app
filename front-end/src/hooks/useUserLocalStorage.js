import { useState } from 'react';

const readUserData = (key) => {
  const oldData = JSON.parse(localStorage.getItem('user'));
  if (key) return oldData[key];
  return oldData;
};

const updateUserData = (key, userData) => {
  const oldData = readUserData();
  const newData = { ...oldData, [key]: userData };
  localStorage.setItem('user', JSON.stringify(newData));
};

const useUserLocalStorage = (key, initialValue) => {
  const [item, setItem] = useState(() => {
    if (initialValue) {
      updateUserData(key, initialValue);
      return initialValue;
    }
    return readUserData(key) || '';
  });

  const updateItem = (newItem) => {
    updateUserData(key, newItem);
    setItem(newItem);
  };

  return [item, updateItem];
};

export default useUserLocalStorage;
