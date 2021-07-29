const axios = require('axios');

const UserRegister = async (name, email, password) => {
  try {
    const createUser = await axios.post('http://localhost:3001/register', {
      name,
      email,
      password,
    });

    const { data: { json } } = createUser;
    console.log(json);
    if (json) return (true, json);

    return false;
  } catch (error) {
    console.log(err);
  }
};

export default UserRegister;
