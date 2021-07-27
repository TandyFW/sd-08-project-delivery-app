const axios = require('axios');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.REACT_APP_SECRET;

const fetchUser = async (email, password) => {
  console.log('chamou');
  const user = axios.post('http://localhost:3001/login', {
    email,
    password,
  })
    .then((response) => {
      const { data: { token } } = response;
      if (token.length) {
        const decoded = jwt.verify(token, secret);
        return decoded;
      }
    })
    .catch((err) => console.log(err));
  return user;
};
export default fetchUser;
