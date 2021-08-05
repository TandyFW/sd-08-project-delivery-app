const axios = require('axios');

const administradorRegister = async ({ name, email, password, role, token }) => {
  try {
    console.log(name, email, password, role, token);
    const createUser = await axios.post('http://localhost:3001/adminsitrator', {
      name,
      email,
      password,
      role,
    },
    {
      headers: {
        Authorization: token,
      } });
    console.log(createUser);

    const { data: { message, json } } = createUser;

    if (message === 'Created') return json;

    return false;
  } catch (error) {
    console.log(err);
  }
};

export default administradorRegister;
