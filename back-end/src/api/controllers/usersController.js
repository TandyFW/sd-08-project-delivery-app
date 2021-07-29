const { getUsersByRole } = require('../services');

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

module.exports = { getAllCustomers, getAllSellers, getAdmin };
