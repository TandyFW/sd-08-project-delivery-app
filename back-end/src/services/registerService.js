const { Op } = require('sequelize');
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
const { users } = require('../database/models');

const conflictUser = async (name, email) => {
  try {
    const result = user.findOne({ where: { [Op.or]: [{ name }, { email }] } });
    return result;
  } catch (error) {
    return {
      statusCode: 500,
      message: 'Error in DB',
    };
  }
};

const secret = fs.readFileSync(path.resolve(__dirname, '..', '..', 'jwt.evaluation.key'), 'utf-8');

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const JWT = ({ id, email, role }) => jwt.sign({ id, email, role }, secret, jwtConfig);

const registerUser = async (name, email, password) => {
  try {
    if (await conflictUser(name, email)) return { statusCode: 409, message: 'Conflict' };
    
    const result = await users.create({

      name,
      email,
      password,
      role: 'user',
    });
    
    const newToken = JWT(result.dataValues);
    const user = { id: result.dataValues.id, name, role: result.dataValues.role };

    return {
      statusCode: 201,
      json: { token: newToken, user },
    };
  } catch (error) {
    return { statusCode: 500, message: 'Error in DB1' };
  }
};

module.exports = {
  registerUser,
};
