const { Sale, User } = require('../../database/models');

const findSales = async (name) => {
  const sales = await User.findOne({
    include: 'sales',
    where: {
      name,
    },
  });
  if (!sales) return { error: { code: 'notFound', message: 'Não existe lista de vendas' } };

  return { result: sales };
};

const findAllSales = async () => {
  const sales = await Sale.findAll();
  if (!sales) return { error: { code: 'notFound', message: 'Não existe lista de vendas' } };

  return { result: sales };
};

module.exports = {
  findSales,
  findAllSales,
};