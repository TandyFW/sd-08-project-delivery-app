const { STATUS_CODES } = require('http');

module.exports = (err, _req, res, _next) => {
  console.log(err);
  if (err.isBoom) {
    const { statusCode, message } = err.output.payload;
    return res.status(statusCode).json({ message });
  }

  if (err.isJoi) {
    const { message } = err.details[0];
    return res.status(400).json({ message });
  }

  res.status(500).json({ message: STATUS_CODES[500] });
};
