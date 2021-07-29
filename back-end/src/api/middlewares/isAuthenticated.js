const { verify } = require('jsonwebtoken');
const {
  StatusCodes,
  getReasonPhrase,
} = require('http-status-codes');
const HandleError = require('../../utils/handleError');
const { SECRET } = require('../../../config/jwtConfig');

const restrictionConfig = new Map([
  [1, 'admin'], 
  [2, 'seller'], 
  [3, 'customer'],
]);

exports.restrictionLevel = (key) => ({ user: { role } }) => {
  try {
    if (!role.includes(restrictionConfig.get(key))) {
      throw new HandleError(
        'Run access prohibited.',
        StatusCodes.FORBIDDEN,
        getReasonPhrase(StatusCodes.FORBIDDEN),
        ); 
    }
  } catch (error) {
    throw new HandleError(
      'Run access prohibited.',
      StatusCodes.FORBIDDEN,
      getReasonPhrase(StatusCodes.FORBIDDEN),
      );
  }
};

exports.isAuthenticated = (callback) => (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    throw new HandleError('JWT Token is missing.', StatusCodes.UNAUTHORIZED,
    getReasonPhrase(StatusCodes.UNAUTHORIZED)); 
  }
  try {
    const user = verify(authHeader, SECRET);
    callback(user);
    req.user = user;
    next();
  } catch (error) {
    if (error instanceof HandleError) {
      return res.status(error.statusCode).json(error.responseError());
    }
    throw new HandleError(error.message,
    StatusCodes.UNAUTHORIZED,
    getReasonPhrase(StatusCodes.UNAUTHORIZED));
  }
};
