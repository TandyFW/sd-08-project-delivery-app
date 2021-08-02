const jwt = require('jsonwebtoken');
const fs = require('fs');

const { getUserById } = require('../services');

const secret = fs.readFileSync('jwt.evaluation.key');

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const decoded = jwt.decode(token, secret);
  if (!decoded) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
  const validUser = await getUserById(decoded.data.id);

  if (validUser.role !== 'administrator') {
    return res.status(403).json({ message: 'Unauthorized user' });
  }

  req.tokenData = decoded.data;
  next();
};
