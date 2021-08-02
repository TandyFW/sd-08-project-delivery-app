const axios = require('axios');
require('dotenv').config();

const fetchUser = async (email, password) => {
  try {
    const user = await axios.post('http://localhost:3001/login', {
      email,
      password,
    });

    const { data } = user;

    return data;
  } catch (error) {
    console.log(error);
  }
};
export default fetchUser;
