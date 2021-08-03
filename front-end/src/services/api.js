import axios from 'axios';

const URL_BASE = 'http://localhost:3001';

export const register = async (name, email, password) => {
  const { data } = await axios({
    method: 'post',
    url: `${URL_BASE}/customer`,
    data: { name, email, password },
  });

  return data;
};

export const login = async (email, password) => {
  const { data } = await axios({
    method: 'post',
    url: `${URL_BASE}/login`,
    data: { email, password },
  });

  return data;
};

export const submitOrder = async (orderData, token) => {
  const { data } = await axios({
    method: 'post',
    url: `${URL_BASE}/sales`,
    data: orderData,
    headers: {
      authorization: token,
    },
  });

  return data;
};

export const getProducts = async () => {
  const { data } = await axios.get(`${URL_BASE}/products`);
  return data;
};

export const getSellers = async () => {
  const { data } = await axios.get(`${URL_BASE}/sellers`);
  return data;
};

export const getOrder = async (id) => {
  const { data } = await axios.get(`${URL_BASE}/sales/${id}`);
  return data;
};
