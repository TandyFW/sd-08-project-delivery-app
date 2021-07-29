const { getAll, create } = require('../services/saleService');
const { getUserByName, getUserByEmail } = require('../services/userService');
const { OK, CREATED } = require('../services/statusCode');

const getAllSales = async (req, res) => {
  const sales = await getAll();
  return res.status(OK).json(sales);
};

const createSales = async (req, res) => {
  const email = req.decoded;
  const { seller, ...data } = req.body;
  const User = await getUserByEmail(email);
  // const Seller = await getUserByName(seller);
  const saleCreated = await create({ ...data, userId: User.id, status: 'Pendente' });
  res.status(CREATED).json(saleCreated);
};

module.exports = {
  getAllSales,
  createSales,
};
