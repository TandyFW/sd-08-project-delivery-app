const { conflict } = require('@hapi/boom');
const { Sale, SaleProduct, sequelize, Product } = require('../database/models');

const createSale = async (sale, t) => {
    const { userId, sellerId, totalPrice,
        deliveryAddress, deliveryNumber } = sale;

        const saleDate = Date(Date.UTC());
        const status = 'Pendente';

    const saleInsert = await Sale.create({ 
        userId,
        sellerId,
        totalPrice,
        deliveryAddress, 
        deliveryNumber,
        saleDate,
        status,
     }, { transaction: t });

    const saleId = saleInsert.dataValues.id;
    return saleId;
};

const saveSale = async (sale) => {
    const t = await sequelize.transaction();
    try {
    const saleId = await createSale(sale, t);
     sale.products.forEach(async ({ id: productId, quantity }) => {
           await SaleProduct.create({
                saleId,
                productId,
                quantity,            
            });
        }, { transaction: t });

        await t.commit();
    } catch (err) {
        await t.rollback();
        throw conflict(err);
    }
};

const getSales = async () => {
    const sales = await Sale.findAll({
        attributes: ['id', 'status', 'total_price', 'sale_date'],
      });

      return sales;
};

const getSaleById = async (id) => {
    const sale = await Sale.findOne({
        where: { id },
        include: [{ model: Product, as: 'Products' }],
      });
    return sale;
};

module.exports = {
    saveSale,
    getSales,
    getSaleById,
};