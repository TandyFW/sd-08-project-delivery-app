const { STATUS_CODES } = require('http');

module.exports = (_err, _req, res, _next) => {
  res.status(500).json({ message: STATUS_CODES[500] });
};
