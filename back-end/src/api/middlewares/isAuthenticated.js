const { verify } = require('jsonwebtoken');
const {
  StatusCodes,
  getReasonPhrase,
} = require('http-status-codes');
const HandleError = require('../../utils/handleError');
const authConfig = require('../../../config/jwtConfig');

module.exports = function isAuthenticated(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    throw new HandleError('JWT Token is missing.', StatusCodes.UNAUTHORIZED,
    getReasonPhrase(StatusCodes.UNAUTHORIZED)); 
  }
  const [, token] = authHeader.split(' ');
  try {
    req.user = verify(token, authConfig.jwt.secret);
    next();
  } catch (error) {
    throw new HandleError('Invalid JWT Token', 
    StatusCodes.UNAUTHORIZED,
    getReasonPhrase(StatusCodes.UNAUTHORIZED));
  }
};
