const { validateToken } = require('../auth/jwt');

const validateUserToken = async (req, res, next) => {
  const { authorizartion: token } = req.headers;
  try {
    const decoded = validateToken(token);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};
  
module.exports = validateUserToken;
