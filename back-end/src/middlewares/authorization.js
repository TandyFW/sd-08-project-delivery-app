const { validateToken } = require('../auth/jwt');
const { status } = require('./status');

const authorization = async (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(status.Conflict).json({ message: 'missing auth token' });
  }

  try {
    validateToken(token);
    next();
  } catch (err) {
    return res.status(status.Conflict).json({ message: err.message });
  }
}

module.exports = authorization;
