const { Sale, User } = require('../../database/models');

const findTransactions = async (name, transactionSide) => {
  const userWithTransactions = await User.findOne({
    include: transactionSide,
    where: {
      name,
    },
  });
  if (!userWithTransactions) {
    return { error: { code: 'notFound', message: 'Não existe lista de vendas' } }; 
  }

  return { result: userWithTransactions };
};

const findAllSales = async () => {
  const sales = await Sale.findAll();
  if (!sales) return { error: { code: 'notFound', message: 'Não existe lista de vendas' } };

  return { result: sales };
};

module.exports = {
  findTransactions,
  findAllSales,
};