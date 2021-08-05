// Sales service - atualização do status de uma venda pelos atributos 'id' e 'status'
// na tabela 'sales'.

const { sale } = require('../../../database/models');
const getSaleById = require('./getSaleById');

module.exports = async (id, status) => {
  await sale.update({ status }, {
    where: { id },
  });

  const result = await getSaleById(id);

  return result;
};
