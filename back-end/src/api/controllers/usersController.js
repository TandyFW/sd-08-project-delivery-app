const { getUsersByRole, getCustomersAndSellersUser, removeUserById } = require('../services');

const getAllCustomers = async (req, res) => {
  const result = await getUsersByRole('customer');
  return res.status(200).json({ customers: result });
};

const getAllSellers = async (req, res) => {
  const result = await getUsersByRole('seller');
  return res.status(200).json({ sellers: result });
};

const getAdmin = async (req, res) => {
  const result = await getUsersByRole('administrator');
  return res.status(200).json({ administrator: result });
};

const getCustomerAndSellers = async (req, res) => {
  const result = await getCustomersAndSellersUser();

  return res.status(200).json({ user: result });
};

const removeUser = async (req, res) => {
  const { id } = req.params;
  await removeUserById(id);

  return res.status(204).json({ message: 'User deleted!' });
};

module.exports = { getAllCustomers, getAllSellers, getAdmin, getCustomerAndSellers, removeUser };
