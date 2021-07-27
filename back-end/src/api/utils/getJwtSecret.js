const fs = require('fs').promises;
const path = require('path');

module.exports = () => {
  const secretPath = path.resolve('..', '..', '..', 'jwt.evaluation.key');
  return fs.readFile(secretPath);
};
