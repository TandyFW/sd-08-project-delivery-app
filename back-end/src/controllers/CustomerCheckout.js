const { getAllSeller, createSale } = require('../services/CustomerCheckout');

const inputSelectSellers = async (_req, res) => {
  const sellers = await getAllSeller();
  res.status(200).json(sellers);
};

const findIdUser = async (req, res) => {
  const { id } = await createSale(req.body);
  res.status(201).json(id);
};

module.exports = { inputSelectSellers, findIdUser };