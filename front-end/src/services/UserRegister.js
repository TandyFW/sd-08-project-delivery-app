const axios = require('axios');

const UserRegister = async (name, email, password) => {
  try {
    const result = await axios.post('http://localhost:3001/register', {
      name,
      email,
      password,
    });

    if (result.message === 'Created') return true;

    return false;
  } catch (error) {
    console.log(err);
  }
};

export default UserRegister;
