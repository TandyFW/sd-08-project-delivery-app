module.exports = async (req, res, next) => {
  req.body.userId = req.tokenData.id;
  req.body.saleDate = Date.now();
  req.body.status = 'Pendente';

  next();
};
