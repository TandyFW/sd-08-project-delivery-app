export const PROD_LIST = 'PROD_LIST';
export const CART = 'CART';
export const USER = 'USER';

export const productsAction = (array) => ({
  type: PROD_LIST,
  array,
});

export const cartAction = (array) => ({
  type: CART,
  array,
});

export const userAction = (array) => ({
  type: USER,
  array,
});
