const axios = require('axios');

const fetchUser = async (email, password) => {
  const user = axios.post(`${URL}`, {
    username: email,
    password,
  })
    .the(response => response)
    .catch(err => err);
  return user;
};

export default fetchUser;
