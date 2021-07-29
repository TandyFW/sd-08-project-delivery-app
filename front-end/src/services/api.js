import axios from 'axios';

let token;

if (localStorage.getItem('user') !== null) {
  token = JSON.parse(localStorage.getItem('user')).token;
}

const api = axios.create({
  baseURL: 'http://localhost:3001',
  headers: { Authorization: token },
});

export default api;
