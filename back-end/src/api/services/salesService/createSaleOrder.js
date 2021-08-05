// Sales service - criação pelos atributos 'userId', 'sellerId', 'totalPrice', 'deliveryAddress', 'deliveryNumber', 'saleDate' e 'status'
// de uma venda na tabela 'sales'.

const { sale } = require('../../../database/models');

module.exports = async ({
    userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    saleDate,
    status,
}) => {
  const result = await sale.create({
    userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    saleDate,
    status });

  return result;
};
