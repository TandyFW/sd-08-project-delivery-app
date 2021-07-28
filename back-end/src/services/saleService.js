const { Sale, SaleProduct } = require('../database/models');

const saveSale = async (sale) => {
    // const { userId, sellerId, totalPrice,
    // deliveryAddress, deliveryNumber } = sale;
    // const saleDate = Date.now();
    // const status = 'Pendente';

//   const sales = await Sale.create({ 
//         userId,
//         sellerId,
//         totalPrice,
//         deliveryAddress, 
//         deliveryNumber,
//         saleDate,
//         status,
//      });

    const saleId = 1;

     const { id: productId, quantity } = sale.products[0];
     console.log(productId, quantity);

        // await SaleProduct.create({
        //     saleId: 1,
        //     productId,
        //     quantity,
        //     ProductId: 1,
        // });

        const find = await SaleProduct.findAll({});
        console.log(find);
};

module.exports = {
    saveSale,
};