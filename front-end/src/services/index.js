import axios from 'axios';

const URL_BASE = 'http://localhost:3001';

export async function getAllUsers() {
  const users = await axios.get(`${URL_BASE}/users/get`)
    .then((response) => response.data);
  return users;
}

export async function getProducts() {
  const products = await axios.get(`${URL_BASE}/customer/products`)
    .then((response) => response.data);
  return products;
}

export async function create(name, email, password, role) {
  try {
    const user = await axios.post(`${URL_BASE}/users`,
      { name, email, password, role })
      .then((response) => response.data);
    return user;
  } catch (error) {
    if (error.response) {
      return {
        status: error.response.status,
        statusText: error.response.statusText,
        message: error.response.data.message,
      };
    }
  }
}
