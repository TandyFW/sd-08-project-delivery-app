import axios from 'axios';

export const createUser = async (userInfo) => axios.post('http://localhost:3000/register', userInfo);

export const teste = async () => axios.get('https://randomuser.me/api/');
