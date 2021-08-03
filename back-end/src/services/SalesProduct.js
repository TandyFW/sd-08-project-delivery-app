const { Sales, User } = require('../database/models');

const salesProducts = async (name) => {
  const findByIdUser = await User.findOne({
    where: { name }
  });

  const findSalesByIdSeller = await Sales.findAll({
    where: { sellerId: findByIdUser.id }
  });

  const initialZero = (data) => {
    if (data <= 9) return '0'+ data;
    return data;
  }

  const toModelSales = findSalesByIdSeller.map((sale) => {
    const date = new Date(sale.saleDate);
    const format = initialZero(date.getDate()) + '/' + initialZero(date.getMonth() + 1) + '/' + date.getFullYear();
    return {
      id: sale.id,
      status: sale.status,
      saleDate: format,
      totalPrice: sale.totalPrice,
      deliveryAddress: sale.deliveryAddress,
      deliveryNumber: sale.deliveryNumber,
    }
  });

  return toModelSales;
}

module.exports = {
  salesProducts,
}
