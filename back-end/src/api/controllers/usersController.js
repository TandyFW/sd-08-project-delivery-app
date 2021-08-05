// Controller para a leitura e remoção de usuário.

const { getUsersByRole, getCustomersAndSellersUser, removeUserById } = require('../services');

// leitura de todos os usuários 'seller'
const getAllSellers = async (req, res) => {
  const result = await getUsersByRole('seller');
  return res.status(200).json({ sellers: result });
};

// leitura de todos os usuários 'customer' e 'seller'
const getCustomerAndSellers = async (req, res) => {
  const result = await getCustomersAndSellersUser();

  return res.status(200).json({ user: result });
};

// remove usuários identificado pelo ID no parametro na Url.
const removeUser = async (req, res) => {
  const { id } = req.params;
  const message = await removeUserById(id);

  if (message.ok) {
    return res.status(204).json(message.message);
  }

  return res.status(500).json(message.message);
};

module.exports = { getAllSellers, getCustomerAndSellers, removeUser };
