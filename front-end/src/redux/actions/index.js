export const PROD_LIST = 'PROD_LIST';

export const productsAction = (array) => ({
  type: PROD_LIST,
  array,
});
