import { useState } from 'react';

const updateUserData = (key, userData) => {
  const oldData = JSON.parse(localStorage.getItem('user'));
  const newData = { ...oldData, [key]: userData };
  localStorage.setItem('user', JSON.stringify(newData));
};

const useUserLocalStorage = (key, initialValue = '') => {
  const [item, setItem] = useState(() => {
    updateUserData(key, initialValue);
    return initialValue;
  });

  const updateItem = (newItem) => {
    updateUserData(key, newItem);
    setItem(newItem);
  };

  return [item, updateItem];
};

export default useUserLocalStorage;
