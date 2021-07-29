const Sequelize = require('sequelize');
const config = require('../config/config');
const { sale, salesProduct } = require('../models');

const sequelize = new Sequelize(config.development);

const getAllSales = async () => {
  const response = await sale.findAll();
  return response;
};

const addNewSale = async (body, user) => {
  const t = await sequelize.transaction();

  const saleData = {
    seller_id: body.sellerId,
    total_price: body.totalPrice,
    delivery_address: body.deliveryAddress,
    delivery_number: body.deliveryNumber,
    status: body.status,
    user_id: user.id,
    sale_date: new Date(),
  };

  try {
    const response = await sale.create(saleData, { transaction: t });
    const salesProducts = body.products.map((product) => ({
      product_id: product.id,
      quantity: product.quantity,
      sale_id: response.toJSON().id,
    }));
    await salesProduct.bulkCreate(salesProducts, { transaction: t });
    await t.commit();
    return response;
  } catch (err) {
    await t.rollback();
    console.log(err)
    return { error: 'Internal error' };
  }
};

module.exports = {
  getAllSales,
  addNewSale,
};
