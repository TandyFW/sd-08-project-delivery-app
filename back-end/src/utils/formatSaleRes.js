module.exports = (item) => {
  if (!item) return null;
  item.dataValues.Products.forEach((x) => {
    const products = x;
    products.dataValues.SaleProducts.forEach((y) => {
      products.dataValues.quantity = y.dataValues.quantity;
      delete products.dataValues.SaleProducts;
    });
  });
  
  return item;
};
