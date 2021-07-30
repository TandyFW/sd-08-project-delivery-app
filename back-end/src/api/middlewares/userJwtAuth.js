const jwt = require('jsonwebtoken');
const { userService } = require('../services');
const { getJwtSecret } = require('../utils');

module.exports = async (req, _res, next) => {
  try {
    const token = req.headers.authorization;
    console.log(token);
    if (!token) return next({ code: 'unauthenticated', message: 'Token not found' });

    const secret = await getJwtSecret();
    const payload = jwt.verify(token, secret.trim());
    
    const { email, name } = payload.data;
    const user = await userService.isValidUser({ email, name });
    if (!user) return next({ code: 'unauthenticated', message: 'Expired or invalid token' });
    
    req.user = user;
    next();
  } catch (err) {
    next({ code: 'unauthenticated', message: 'Expired or invalid token' });
  }
};