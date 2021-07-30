import STATUS_CODES from '../common/httpStatusCodes';

const URL_BASE = 'http://localhost:3001';
const headers = { 'Content-Type': 'application/json' };

export const register = async (name, email, password) => {
  const options = {
    method: 'POST',
    headers,
    body: JSON.stringify({ name, email, password }),
  };

  return fetch(`${URL_BASE}/customer`, options)
    .then((response) => {
      if (response.status !== STATUS_CODES.CREATED) {
        console.log(response.status);
        throw new Error('Creation error');
      }
      return response.json();
    })
    .then((data) => data);
};

export const login = async (email, password) => {
  const options = {
    method: 'POST',
    headers,
    body: JSON.stringify({ email, password }),
  };

  return fetch(`${URL_BASE}/login`, options)
    .then((response) => {
      if (response.status !== STATUS_CODES.OK) {
        throw new Error('Login error');
      }
      return response.json();
    })
    .then((data) => data);
};

export const getProducts = async () => (
  fetch(`${URL_BASE}/products`)
    .then((response) => {
      if (response.status !== STATUS_CODES.OK) {
        throw new Error('Cant fetch products');
      }
      return response.json();
    })
    .then((data) => data)
);

export const getOrders = async () => {
  fetch(`${URL_BASE}/orders`)
    .then((response) => {
      if (response.status !== STATUS_CODES.OK) {
        throw new Error('Order error');
      }
      return response.json();
    })
    .then((data) => data);
};
