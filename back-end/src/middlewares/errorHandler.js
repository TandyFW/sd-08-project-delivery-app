function handleErros(err, _req, res, _next) {
console.log(err.statusCode);
  res.status(err.statusCode).json({ message: err.message });
}

module.exports = handleErros;
