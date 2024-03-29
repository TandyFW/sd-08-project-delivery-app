import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});
api.interceptors.request.use(async (config) => {
  const { CancelToken } = axios;
  const source = CancelToken.source();
  let token;
  if (localStorage.getItem('user') !== null) {
    token = JSON.parse(localStorage.getItem('user')).token;
  }
  if (token) {
    config.headers.Authorization = token;
    config.cancelToken = source.token;
  }
  return config;
});

export default api;
