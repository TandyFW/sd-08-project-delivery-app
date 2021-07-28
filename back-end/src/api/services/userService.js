const md5 = require('md5');
const JWT = require('jsonwebtoken');
const path = require('path');
const jwtKey = require('fs')
  .readFileSync(path.resolve(__dirname, '../../../jwt.evaluation.key'),
    { encoding: 'utf-8' })
  .trim();
const { user } = require('../../database/models');
require('dotenv').config();

// const { SECRET } = process.env;

const JWTCONFIG = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const createUser = async ({ name, email, password }) => {
  try {
    const newUser = { name, email, password: md5(password), role: 'customer' };
    const registredUser = await user.create(newUser);
    return registredUser;
  } catch (error) {
    return error.message;
  }
};

const getUsers = async () => {
  try {
    const users = await user.findAll();
    return users;
  } catch (error) {
    return error.message;
  }
};

const userLogin = async (email, password) => {
  const findUser = await user.findOne({ where: { email } });
  if (findUser.password !== md5(password)) throw new Error('Not found');
  if (!findUser) throw new Error('Not found');
  return findUser;
};

const generateToken = (userFields) => JWT.sign({ data: userFields }, jwtKey, JWTCONFIG);
const verifyToken = (token) => {
  if (!token) {
    return { code: 401, message: 'invalid JWT' };
  }
  try {
    const decoded = JWT.verify(token, jwtKey);
    return decoded.data;
  } catch (err) {
    return { code: 401, message: 'invalid JWT' };
  }
};
module.exports = {
  userLogin,
  createUser,
  getUsers,
  generateToken,
  verifyToken,
};
