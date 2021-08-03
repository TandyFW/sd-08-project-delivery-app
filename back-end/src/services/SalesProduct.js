const { Sales, User } = require('../database/models');

const salesProducts = async (name) => {
  const findByIdUser = await User.findOne({
    where: { name }
  });

  const findSalesByIdSeller = await Sales.findAll({
    where: { sellerId: findByIdUser.id }
  });

  return findSalesByIdSeller;
}

module.exports = {
  salesProducts,
}
