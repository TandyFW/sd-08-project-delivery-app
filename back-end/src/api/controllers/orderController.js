const { createCustomerOrder } = require('../services');

const createOrder = async (req, res) => {
  const result = await createCustomerOrder(req.body);

  return res.status(201).json({ products: result });
};

module.exports = { createOrder };
