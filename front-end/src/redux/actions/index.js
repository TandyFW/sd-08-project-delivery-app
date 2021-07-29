import { getAllUsers } from '../../services';

export const PROD_LIST = 'PROD_LIST';
export const CART = 'CART';
export const LOGIN = 'LOGIN';

export const productsAction = (array) => ({
  type: PROD_LIST,
  array,
});

export const cartAction = (array) => ({
  type: CART,
  array,
});

export const loginAction = (array) => ({
  type: LOGIN,
  array,
});
