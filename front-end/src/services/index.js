import axios from 'axios';

const URL_BASE = 'http://localhost:3001';

export async function getAllUsers() {
  const accessToken = JSON.parse(localStorage.getItem('user'));
  const users = await axios.get(`${URL_BASE}/register`, {
    headers: {
      Authorization: `${accessToken.token}`,
    },
  })
    .then((response) => response.data)
    .catch(console.error);
  return users;
}

export async function getAllProducts() {
  const products = await axios.get(`${URL_BASE}/products`)
    .then((response) => response.data);
  return products;
}

export async function getByRole(role) {
  const users = await axios.get(`${URL_BASE}/register/role/${role}`)
  .then((response) => response.data.registers);
  return users;
}

export async function createUser(name, email, password, role) {
  try {
    const user = await axios.post(`${URL_BASE}/register`,
      { name, email, password, role })
      .then((response) => response.data);
    return user;
  } catch (error) {
    console.error(error);
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
    const dataLogin = await axios.post(`${URL_BASE}/login`,
      { email, password })
      .then((response) => response.data);
    return dataLogin;
  } catch (error) {
    console.error(error);
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
  const accessToken = JSON.parse(localStorage.getItem('user'));
  try {
    const result = await axios.delete(`${URL_BASE}/register/${id}`,
      { headers: {
        Authorization: `${accessToken.token}`,
      } })
      .then((response) => response.data);
    return result;
  } catch (error) {
    console.error(error);
    if (error.response) {
      return {
        status: error.response.status,
        statusText: error.response.statusText,
        message: error.response.data.message,
      };
    }
  }
}
