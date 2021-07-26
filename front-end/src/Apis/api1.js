import axios from 'axios';

const BASEURL = 'http://localhost:3001/';
const LOGIN = 'users/login';
const REGISTER = 'users/create';

export default {
  loginFetch: async (email, password) => {
    const loginObj = { email, password };
    const res = await axios
      .post(`${BASEURL}${LOGIN}`,
        loginObj);
    return res;
  },
  registerFetch: async (name, email, password) => {
    const registerObj = { name, email, password };
    const res = await axios
      .post(`${BASEURL}${REGISTER}`,
        registerObj);
    return res;
  },
};

/*
fetch(URL,{
  method:,
  headers:,
  body
})
*/
