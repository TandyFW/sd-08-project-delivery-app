const {
  StatusCodes,
  getReasonPhrase,
} = require('http-status-codes');
const { Op } = require("sequelize");
const md5 = require('md5');
const { users } = require('../database/models');
const { signToken } = require('../../config/jwtConfig');
const HandleError = require('../utils/handleError');

exports.auth = async ({ name, email, password, role }) => {
  const user = await users.findOne({
    where: {
      [Op.or]: [
        { name },
        { email }
      ]
    }
  });
  if (user) {
    throw new HandleError(
      'Nome ou email já em uso', StatusCodes.CONFLICT,
      getReasonPhrase(StatusCodes.CONFLICT),
    );
  }
  const { id, name, role } = user;
  const token = await signToken({ user: { id, role } });
  return { name, email, role, token };
};
