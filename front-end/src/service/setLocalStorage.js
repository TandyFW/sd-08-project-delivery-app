// USER

export const setUserInfo = (args) => {
  localStorage.setItem('user', JSON.stringify(args));
};

// CARRINHO

const setCarrinhoFirstTime = (productInfos) => {
  localStorage.setItem('carrinho', JSON.stringify([productInfos]));
};

const deleteProduct = (carrinho, productToDelete) => {
  const { id } = productToDelete;
  carrinho.forEach((element, index) => {
    if (element.id === id) carrinho.splice(index, 1);
  });
  return carrinho;
};

const updateCarrinho = (carrinho, productToInsertOrUpdate) => {
  const { id, quantity } = productToInsertOrUpdate;
  if (carrinho.find((product) => product.id === id)) {
    if (quantity === 0) {
      const carrinhoDeletedProduct = deleteProduct(carrinho, productToInsertOrUpdate);
      return carrinhoDeletedProduct;
    }
    const carrinhoUpdated = carrinho.map(
      (product) => (product.id === id ? { ...product, quantity } : product),
    );
    return carrinhoUpdated;
  }
  if (quantity === 0) return carrinho;
  const newCarrinho = [...carrinho, productToInsertOrUpdate];
  return newCarrinho;
};

export const setCarrinho = (productInfos) => {
  if (localStorage.getItem('carrinho') === null) {
    setCarrinhoFirstTime(productInfos);
  } else {
    const carrinho = JSON.parse(localStorage.getItem('carrinho'));
    const carrinhoUpdated = updateCarrinho(carrinho, productInfos);
    localStorage.setItem('carrinho', JSON.stringify(carrinhoUpdated));
  }
};
