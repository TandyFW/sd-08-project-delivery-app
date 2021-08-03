const { Sales, User } = require('../database/models');

const salesProducts = async (name) => {
  const findByIdUser = await User.findOne({
    where: { name }
  });

  const findSalesByIdSeller = await Sales.findAll({
    where: { sellerId: findByIdUser.id }
  });

<<<<<<< HEAD
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
=======
  const insertZeroInitial = (dayMounth) => {
    if (dayMounth <= 9) return '0' + dayMounth;
    return dayMounth;
  }

  const mappedKeys = findSalesByIdSeller.map((data) =>{
    const milisecond = Date.parse(data.saleDate)
    const date = new Date(milisecond);
    const formateDate = insertZeroInitial(date.getDate())
      + '/' + insertZeroInitial(date.getMonth() + 1) + '/' + date.getFullYear();

    const remodel = {
      id: data.id,
      status: data.status,
      saleDate: formateDate,
      totalPrice: data.totalPrice,
      deliveryAddress: data.deliveryAddress,
      deliveryNumber: data.deliveryNumber
    };

    return remodel;
  } );

  return mappedKeys;
>>>>>>> 5c1f571b397ef1ebb90340903493a5f847cdaaa5
}

module.exports = {
  salesProducts,
}
