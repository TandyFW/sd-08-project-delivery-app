module.exports = (role) => (req, _res, next) => {
  if (req.user.role !== role) {
    return next({ code: 'forbidden', message: 'Usuário não pertence à categoria necessária' });
  }
  next();
};
