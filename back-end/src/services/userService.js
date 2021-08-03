const md5 = require('md5');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const { User } = require('../database/models');
const userErrors = require('../schema/userErrors');

const generateToken = async (email, role) => {
  const SECRET = fs
    .readFileSync('jwt.evaluation.key', { encoding: 'utf-8' })
    .trim();

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const user = { email, role };
  const token = jwt.sign({ data: user }, SECRET, jwtConfig);
  return token;
};

const login = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (!user) {
    return userErrors.userNotFound;
  }
  if (md5(password) !== user.password) {
    return userErrors.wrongPassword;
  }
  const token = await generateToken(email, user.role);
  const userInfo = {
    name: user.name,
    email: user.email,
    token,
    role: user.role,
  };
  return { userInfo };
};

const registerClient = async (name, email, password, role) => {
  const roleToRegister = role || 'customer';
  const nameAlredyExists = await User.findOne({ where: { email } });
  const emailAlredyExists = await User.findOne({ where: { name } });
  if (nameAlredyExists || emailAlredyExists) return userErrors.emailOrNameAlreadyExists;
  const passwordMd5 = md5(password);
  await User.create({
    name,
    email,
    password: passwordMd5,
    role: roleToRegister,
  });
  const token = await generateToken(email, roleToRegister);
  return token;
};

const isUserAdministrator = (token) => {
  const JWT_SECRET = fs
    .readFileSync('jwt.evaluation.key', { encoding: 'utf-8' })
    .trim();
  const decoded = jwt.verify(token, JWT_SECRET);
  const {
    data: { role },
  } = decoded;
  if (role !== 'administrator') return false;
  return true;
};

const registerUserByManager = async (userInfos) => {
  const { name, email, password, role, token } = userInfos;

  if (!isUserAdministrator(token)) return userErrors.userNotAuthorized;

  const responseRegisterUser = await registerClient(
    name,
    email,
    password,
    role,
  );

  if (responseRegisterUser.err) return responseRegisterUser;

  return { message: 'User cadastrado com sucesso' };
};

const getAllUsers = async (token) => {
  if (!isUserAdministrator(token)) return userErrors.userNotAuthorized;
  const users = await User.findAll({ where: { role: ['seller', 'customer'] } });
  if (!users) return userErrors.usersNotFound;
  return users;
};

const deleteUserByManager = async (token, id) => {
  if (!isUserAdministrator(token)) return userErrors.userNotAuthorized;
  await User.destroy({ where: { id } });
  return { message: 'User Deleted' };
};

const getAllSeller = async () => {
  const result = await User.findAll({ where: { role: 'seller' } });
  return { seller: result };
};

module.exports = {
  login,
  registerClient,
  registerUserByManager,
  getAllUsers,
  deleteUserByManager,
  getAllSeller,
};
