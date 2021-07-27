const axios = require('axios');

const UserRegister = async (name, email, password) => {
  axios.post('http://localhost:3001/register', {
    name,
    email,
    password,
  })
    .then((response) => {
      console.log(response);
      if (response.message === 'Created') return true;
    })
    .catch((err) => console.log(err));
    return false;
};
export default UserRegister;
