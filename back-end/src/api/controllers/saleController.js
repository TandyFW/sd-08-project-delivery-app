const { getAll, create, getAllSalesById } = require('../services/saleService');
const { getUserByEmail } = require('../services/userService');
const { OK, CREATED } = require('../services/statusCode');

const getAllSales = async (req, res) => {
  const sales = await getAll();
  return res.status(OK).json(sales);
};

const createSales = async (req, res) => {
  const { email } = req.decoded;
  const { seller, ...data } = req.body;
  const User = await getUserByEmail(email);
  const sale = { ...data, userId: User.id, status: 'Pendente' };
  const saleCreated = await create(sale);
  res.status(CREATED).json(saleCreated);
};

const findSalesById = async (req, res) => {
  const { email } = req.decoded;
  const sales = await getAllSalesById(email);
  res.status(OK).json(sales);
};

module.exports = {
  getAllSales,
  createSales,
  findSalesById,
};
