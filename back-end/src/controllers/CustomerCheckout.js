const { getAllSeller, createSale } = require('../services/CustomerCheckout');

const inputSelectSellers = async (_req, res) => {
  const sellers = await getAllSeller();
  res.status(200).json(sellers);
}

const findIdUser = async (req, res) => {
  const { name, seller, address, number } = req.body;

  const id = await createSale(name, seller, address, number);
  res.status(200).json(id);
}

module.exports = {  inputSelectSellers, findIdUser };