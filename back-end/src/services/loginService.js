const { Op } = require('sequelize');
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
const user = require('../database/models');

const secret = fs.readFile(path.join(__dirname, '../../', 'jwt.evaluation.key'), 'utf-8',
  (err, data) => {
    if (err) throw err;
    return data;
});

const jwtConfig = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const JWT = ({ id, email, role }) => jwt.sign({ id, email, role }, secret, jwtConfig);

const findUser = async (email, password) => {
  try {
    const result = await user.findOne({ where: { [Op.and]: [{ email }, { password }] } });
    if (!result) {
      return {
        statusCode: 404,
        json: { validate: false },
      };
    }

    return {
      statusCode: 200,
      json: { validate: true, token: JWT(result) },
    };
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