const { sale, saleProduct } = require('../database/models');

// eslint-disable-next-line max-lines-per-function

const createSaleProduct = async ({ saleId, productId, quantity }) => ((await saleProduct.create({ 
  saleId,
  productId,
  quantity,
})).get({ plain: true })
);
const createSale = async (
  { totalPrice, deliveryAddress, deliveryNumber, userId, sellerId, products },
) => {
const saleCreated = (await sale.create({
totalPrice,
deliveryAddress,
deliveryNumber,
userId,
sellerId,
status: 'Pendente',
})).get({ plain: true });
// console.log('PRODUCTS', typeof JSON.parse(products), JSON.parse(products));
const saleId = saleCreated.id;
JSON.parse(products).forEach(async ({ productId, quantity }) => {
  const createdSaleProduct = await createSaleProduct({ productId, quantity, saleId });
  console.log(createdSaleProduct);
});
return saleCreated;
};

module.exports = { createSale };
