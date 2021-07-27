const axios = require('axios');
const jwt = require('jsonwebtoken');

const secret = 'grupo-8';
const fetchUser = async (email, password) => {
  const user = axios.post('http://localhost:3001/login', {
    email,
    password,
  })
    .then((response) => {
      const { data: { token } } = response;
      console.log(typeof token);
      if (token.length) {
        const decoded = jwt.verify(token, secret);
        console.log(decoded);
        // return decoded.role;
      }
    })
    .catch((err) => err);
  return user;
};
export default fetchUser;
