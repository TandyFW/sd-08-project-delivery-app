import axios from 'axios';

const BASEURL = 'http://localhost:3001/';
const LOGIN = 'users/login';
const REGISTER = 'users/create';
const SALES = 'sales';
// const USERS = 'users';
const SELLERS = 'users/sellers';
const PRODUCTS = 'products';

export default {
  loginFetch: async (email, password) => {
    const loginObj = { email, password };
    const res = await axios.post(`${BASEURL}${LOGIN}`, loginObj);
    return res;
  },

  registerFetch: async (name, email, password) => {
    const registerObj = { name, email, password };
    const res = await axios.post(`${BASEURL}${REGISTER}`, registerObj);
    return res;
  },

  getAllSales: async () => axios
    .get(`${BASEURL}${SALES}`)
    .then((result) => result.data.response),

  // getAllUsers: async () => axios
  //   .get(`${BASEURL}${USERS}`)
  //   .then((result) => result.data.response),

  getAllSellers: async () => axios
    .get(`${BASEURL}${SELLERS}`)
    .then((result) => result.data.response),

  productsFetch: async () => {
    const res = await axios
      .get(`${BASEURL}${PRODUCTS}`);
    return res;
  },
};