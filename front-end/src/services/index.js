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
