// module.exports = (err, req, res, _next) => {
//   const statusByErrorCode = {
//     badRequest: 400,
//     unauthorized: 401,
//     forbidden: 403,
//     notFound: 404,
//     conflict: 409,
//   };

//   const status = statusByErrorCode[err.code] || 500;

//   res.status(status).json({ error: { message: err.message } });
// };
