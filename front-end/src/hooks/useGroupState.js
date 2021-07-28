import { useState } from 'react';

export default (initialState = {}) => {
  const state = {};
  Object.entries(initialState).forEach(([key, value]) => {
    const [keyValue, keySetter] = useState(value);
    state[key] = { value: keyValue, set: keySetter };
  });

  return state;
};
