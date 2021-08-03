const { Sales, User } = require('../database/models');

const salesProducts = async (name) => {
  const findByIdUser = await User.findOne({
    where: { name }
  });

  const findSalesByIdSeller = await Sales.findAll({
    where: { sellerId: findByIdUser.id }
  });

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
}

module.exports = {
  salesProducts,
}
