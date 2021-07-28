import axios from 'axios';

const URL_BASE = 'http://localhost:3001';

export async function getAllUsers() {
  const users = await axios.get(`${URL_BASE}/register`)
    .then((response) => response.data);
  return users;
}

export async function getAllProducts() {
  const products = await axios.get(`${URL_BASE}/products`)
    .then((response) => response.data);
  return products;
}

export async function create(name, email, password, role) {
  try {
    const user = await axios.post(`${URL_BASE}/register`,
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

export async function login(email, password) {
  try {
    const token = await axios.post(`${URL_BASE}/login`,
      { email, password })
      .then((response) => response.data);
    return token;
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

export async function exclude(id) {
  try {
    const result = await axios.delete(`${URL_BASE}/register/${id}`,
      { })
      .then((response) => response.data);
    return result;
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
