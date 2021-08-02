const { validateToken } = require('../auth/jwt');
const { status } = require('./status');

const authorizationMid = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(status.Conflict).json({ message: 'missing auth token' });
  }

  try {
    validateToken(authorization);
    next();
  } catch (err) {
    return res.status(status.Conflict).json({ message: err.message });
  }
};

module.exports = authorizationMid;
