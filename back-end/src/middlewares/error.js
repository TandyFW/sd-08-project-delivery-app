const INTERNAL_SERVER_ERROR = 500;
module.exports = (err, _req, res, _next) => {
  console.log(err);
  if (err.err) return res.status(err.err.status).json({ message: err.err.message });
  res
    .status(INTERNAL_SERVER_ERROR)
    .json({ message: `erro no servidor ${err}` });
};
