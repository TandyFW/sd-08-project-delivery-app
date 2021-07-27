const rescue = require('express-rescue');
const jwt = require('jsonwebtoken');
const fs = require('fs');

const UNAUTHORIZED_STATUS = 401;

const error = {
  status: UNAUTHORIZED_STATUS,
  message: 'Expired or invalid token',
};

const missingJWT = {
  status: UNAUTHORIZED_STATUS,
  message: 'Token not found',
};

const auth = rescue( async(req, res, next) => {
  const JWT_SECRET = await fs.readFileSync('jwt.evaluation.key', {
    encoding: 'utf8',
    flag: 'r',
  });
  const token = req.headers.authorization;
  if (!token) return next({ err: missingJWT });
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const {
      data: { email },
    } = decoded;
    req.email = email;
  } catch (e) {
    next({ err: error });
  }
  next();
});

module.exports = auth;