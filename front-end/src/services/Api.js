import axios from 'axios';

export const createUser = async (userInfo) => {
  try {
    const { data } = await axios.post('http://localhost:3001/register', userInfo);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const teste = async () => axios.get('https://randomuser.me/api/');
