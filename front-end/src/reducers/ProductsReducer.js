const initialState = {
  products: [],
};
const invalidIndex = -1;
const ProductsReducer = (state = initialState, action) => {
  const products = [...state.products];
  switch (action.type) {
  case 'ADD_PRODUCT': {
    const { id } = action.payload.data;
    const index = products.findIndex((item) => item.id === id);
    if (index > invalidIndex) {
      products[index].qtd = action.payload.qtd;
    } else {
      products.push({ ...action.payload.data, qtd: action.payload.qtd });
    }
    return { ...state, products };
  }
  case 'REMOVE_ITEM': {
    const id = action.payload;
    const index = products.findIndex((item) => item.id === id);
    if (index > invalidIndex) products.splice(index, 1);
    return { ...state, products };
  }
  default:
    return state;
  }
};
export default ProductsReducer;
