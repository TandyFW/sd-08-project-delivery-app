const { createSaleOrder, createSaleProductOrder, getSaleById } = require('../services');

const createOrder = async (req, res) => {
  const saleOrder = await createSaleOrder(req.body);

  const saleId = saleOrder.id;
  const { products } = req.body;

  await createSaleProductOrder({ saleId, products });

  const result = await getSaleById(saleId);

  return res.status(201).json({ sale: result });
};

module.exports = { createOrder };
