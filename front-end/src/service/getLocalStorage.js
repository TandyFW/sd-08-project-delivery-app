export const getUserInfo = () => {
  const data = localStorage.getItem('user');
  return JSON.parse(data);
};

export const getProductsCarrinho = () => {
  const products = localStorage.getItem('carrinho');
  if (!products) return [];
  return JSON.parse(products);
};
