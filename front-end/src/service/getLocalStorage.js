export const getUserInfo = () => {
  const data = localStorage.getItem('user');
  return JSON.parse(data);
};

export const getProductsCarrinho = () => {
  const products = localStorage.getItem('carrinho');
  return JSON.parse(products);
};
