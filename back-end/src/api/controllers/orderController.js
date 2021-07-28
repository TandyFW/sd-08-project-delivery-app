const {
  createSaleOrder,
  createSaleProductOrder,
  getSaleById,
  getUserById,
  getAllCustomerOrders,
  getAllSellerOrders,
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
  let result;

  const { role } = await getUserById(id);

  if (role === 'customer') {
    result = await getAllCustomerOrders(id);
  }

  if (role === 'seller') {
    result = await getAllSellerOrders(id);
  }

  return res.status(200).json({ sale: result });
};

module.exports = { createOrder, getAllOrders };
