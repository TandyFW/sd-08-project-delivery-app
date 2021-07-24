const { STATUS_CODES } = require('http');

module.exports = (err, _req, res, _next) => {
  if (err.isBoom) {
    const { statusCode, message } = err.output.payload;
    return res.status(statusCode).json({ message });
  }
  res.status(500).json({ message: STATUS_CODES[500] });
};
