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
    where: { email: { [Op.eq]: email } },
  });
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
  const token = await signToken({ user: { id: user.id, role: user.role } });
  return { name: user.name, email, role: user.role, token };
};
