const {
  createSaleOrder,
  createSaleProductOrder,
  getSaleById,
  getUserById,
  getAllOrdersByUser,
  getOrderById,
} = require('../services');

const createOrder = async (req, res) => {
  const saleOrder = await createSaleOrder(req.body);

  const saleId = saleOrder.id;
  const { products } = req.body;

  await createSaleProductOrder({ saleId, products });

  const result = await getSaleById(saleId);

  return res.status(201).json({ sale: result });
};

const getAllOrders = async (req, res) => {
  const { id } = req.tokenData;

  const { role } = await getUserById(id);

  const result = await getAllOrdersByUser(id, role);

  return res.status(200).json({ sale: result });
};

const getOrder = async (req, res) => {
  const { id } = req.tokenData;
  const saleId = req.params.id;
  const { role } = await getUserById(id);

  const result = await getOrderById(id, role, saleId);

  return res.status(200).json({ sale: result });
};

module.exports = { createOrder, getAllOrders, getOrder };
