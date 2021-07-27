import STATUS_CODES from '../common/httpStatusCodes';

const URL_BASE = 'http://localhost:3001';

export const register = async (name, email, password) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password }),
  };

  return fetch(`${URL_BASE}/customer`, options)
    .then((response) => {
      if (response.status !== STATUS_CODES.CREATED) {
        throw new Error('Error dfsfasd');
      }
      return response.json();
    })
    .then((data) => data);
};

export const login = async (email, password) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  };

  return fetch(`${URL_BASE}/login`, options)
    .then((response) => {
      if (response.status !== STATUS_CODES.OK) {
        throw new Error('Error');
      }
      return response.json();
    })
    .then((data) => data);
};
