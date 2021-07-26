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
  const [user] = await users.findAll({
    where: {
      email: { [Op.eq]: email },
    },
  });
  if (!user || md5(password) !== user.password) {
    throw new HandleError(
      'Invalid fields email or password', 
      StatusCodes.UNAUTHORIZED,
      getReasonPhrase(StatusCodes.UNAUTHORIZED),
    );
  }
  const token = await signToken({ user: {
    id: user.id,
    role: user.role,
  } });
  return { token };
};
