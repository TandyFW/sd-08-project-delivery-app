const { getStatusByCode } = require('../utils');

module.exports = (err, _req, res, _next) => {
  const { code, message } = err;

  const status = getStatusByCode(code);

  res.status(status).json({ message });
};