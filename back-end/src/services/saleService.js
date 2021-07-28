const { Sale } = require('../database/models');

const saveSale = async (sale) => {
    const { userId, sellerId, totalPrice,
    deliveryAddress, deliveryNumber } = sale;
    const saleDate = Date.now();
    const status = 'Pendente';

  const sales = await Sale.create({ 
        userId,
        sellerId,
        totalPrice,
        deliveryAddress, 
        deliveryNumber,
        saleDate,
        status,
     });

     console.log(sales);
};

module.exports = {
    saveSale,
};