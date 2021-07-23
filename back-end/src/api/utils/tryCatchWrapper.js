module.exports = (callback, code = 'internalError') => async (req, res, next) => {
  try {
    await callback(req, res, next);
  } catch (err) {
    next({ code, message: err.message });
  }
};