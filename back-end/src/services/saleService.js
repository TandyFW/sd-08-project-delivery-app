const { Sale, SaleProduct, sequelize } = require('../database/models');

// eslint-disable-next-line max-lines-per-function
const saveSale = async (sale) => {
    const { userId, sellerId, totalPrice,
    deliveryAddress, deliveryNumber } = sale;
    const saleDate = Date(Date.UTC());
    const status = 'Pendente';

    const t = await sequelize.transaction();

    try {
    const saleInsert = await Sale.create({ 
        userId,
        sellerId,
        totalPrice,
        deliveryAddress, 
        deliveryNumber,
        saleDate,
        status,
     });

    const saleId = saleInsert.dataValues.id;

     sale.products.forEach(async ({ id: productId, quantity }) => {
        //  console.log(id, quantity);
           await SaleProduct.create({
                saleId,
                productId,
                quantity,            
            });
        }, { transaction: t });
        await t.commit();
    } catch (err) {
        console.log(err);
        await t.rollback();
    }
};

module.exports = {
    saveSale,
};