const fs = require('fs');
const path = require('path');

const JWT_SECRET_PATH = path.join(__dirname, '..', '..', 'jwt.evaluation.key');

const secret = fs.readFileSync(JWT_SECRET_PATH, 'utf-8').trim();

module.exports = {
  secret,
};
