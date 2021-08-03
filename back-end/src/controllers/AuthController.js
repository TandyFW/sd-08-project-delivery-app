const fs = require('fs');
const jwt = require('jsonwebtoken');
const { findByEmail } = require('../services/UserService');

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token || token === '') {
    return res.status(403).json({ message: 'Token not found' });
  }
  try {
    const secret = fs.readFileSync(`${__dirname}/../../jwt.evaluation.key`, 'utf-8').trim();
    const decoded = jwt.verify(token, secret);
    const user = await findByEmail(decoded.data.email);
    if (!user) {
      return res.status(403).json({ message: 'Expired or invalid token' });
    }
    req.user = { id: user.id, ...decoded.data };
    next();
  } catch (error) {
    console.log('error:', error);
    return res.status(403).json({ message: error });
  }
};