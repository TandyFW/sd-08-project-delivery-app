const { Sales, User } = require('../database/models');

const salesProducts = async (name) => {
  const findByIdUser = await User.findOne({ where: { name } });
  const findSalesByIdSeller = await Sales.findAll({ where: { sellerId: findByIdUser.id },
  });
  const mappedKeys = findSalesByIdSeller.map((data) => {
      const { id, status, saleDate, totalPrice, deliveryAddress, deliveryNumber } = data;
      const remodel = { id, status, saleDate, totalPrice, deliveryAddress, deliveryNumber };
    return remodel;
  });
  return mappedKeys;
};

module.exports = {
  salesProducts,
};
