const axios = require('axios');
const jwt = require('jsonwebtoken');

const secret = 'grupo8';
const fetchUser = async (email, password) => {
  console.log('chamou');
  const user = axios.post('http://localhost:3001/login', {
    email,
    password,
  })
    .then((response) => {
      console.log(response);
      const { token } = response.data;
      console.log(typeof token);
      if (token) {
        console.log('if');
        console.log(token);
        console.log(secret);
        const decoded = jwt.verify(token, secret);
        console.log(decoded);
        // return decoded.role;
      }
    })
    .catch((err) => console.log(err));
  return user;
};
export default fetchUser;
