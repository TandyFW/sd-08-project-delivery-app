const { Op } = require('sequelize');
const {
  StatusCodes,
  getReasonPhrase,
} = require('http-status-codes');
const md5 = require('md5');
const { users } = require('../database/models');
const { signToken } = require('../../config/jwtConfig');
const HandleError = require('../utils/handleError');

exports.auth = async ({ email, password }) => {
  const user = await users.findOne({ where: { email } });
  if (!user) {
    throw new HandleError(
      'Not found', StatusCodes.NOT_FOUND,
      getReasonPhrase(StatusCodes.NOT_FOUND),
    );
  }
  if (md5(password) !== user.password) {
    throw new HandleError(
      'Invalid fields email or password', 
      StatusCodes.BAD_REQUEST,
      getReasonPhrase(StatusCodes.BAD_REQUEST),
    );
  }
  const { id, name, role } = user
  const token = await signToken({ user: { id, role } });
  return {
    name,
    email,
    role,
    token
  };
};
