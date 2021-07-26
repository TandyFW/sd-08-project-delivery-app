import { readFile } from 'fs';

const path = require('path');
const axios = require('axios');
const jwt = require('jsonwebtoken');

const fetchUser = async (email, password) => {
  const user = axios.post(`${URL}`, {
    email,
    password,
  })
    .then((response) => {
      if (response.token) {
        const decoded = jwt.verify(
          token,
          readFile(
            path.join(
              __dirname,
              '../../../../',
              '/back-end/jwt.evaluation.key',
            ),
            'utf-8',
            (data, err) => {
              if (err) throw err;
              return data;
            },
          ),
        );
        return decoded.role;
      }
    })
    .catch((err) => err);
  return user;
};

export default fetchUser;
