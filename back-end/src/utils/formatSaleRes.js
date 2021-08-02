module.exports = (item) => {
  console.log(item);
  item.dataValues.Products.forEach((x) => {
    const products = x;
    products.dataValues.SaleProducts.forEach((y) => {
      products.dataValues.quantity = y.dataValues.quantity;
      delete products.dataValues.SaleProducts;
    });
  });
  
  return item;
};
