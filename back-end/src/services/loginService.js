const { Op } = require('sequelize');
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
const { users } = require('../database/models');

const secret = fs.readFileSync(path.resolve(__dirname, '..', '..', 'jwt.evaluation.key'), 'utf-8');

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const JWT = ({ id, email, role }) => jwt.sign({ id, email, role }, secret, jwtConfig);

const findUser = async (email, password) => {
  try {
    const result = await users
      .findOne({ where: { [Op.and]: [{ email }, { password }] }, raw: true });
      
    if (!result) {
      return {
        statusCode: 404,
        json: { validate: false },
      };
    }
    const newToken = JWT(result);
    console.log(newToken);
    return { statusCode: 200, json: { validate: true, token: newToken } };
  } catch (err) {
    return {
      statusCode: 500,
      message: 'Erro in DB',
    };
  }
};

module.exports = {
  findUser,
};
