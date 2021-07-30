import axios from 'axios';
import {
  getUserInfo,
  getProductsCarrinho,
} from '../../service/getLocalStorage';

export const STORE_EMAIL = 'STORE_EMAIL';
export const REQUEST_ALL_PRODUCTS = 'REQUEST_ALL_PRODUCTS';
export const ISLOADING = 'ISLOADING';
export const SAVE_PRODUCTS = 'SAVE_PRODUCTS';
export const CHANGE_TOTAL_VALUE = 'CHANGE_TOTAL_VALUE';
export const SAVE_USERS = 'SAVE_USERS';
export const SAVE_ORDERS = 'SAVE_ORDERS';

export const storeEmail = (email) => ({
  type: STORE_EMAIL,
  payload: email,
});

export const actionIsLoading = (isLoading) => ({
  type: ISLOADING,
  payload: {
    isLoading,
  },
});

export const saveProducts = (products) => ({
  type: SAVE_PRODUCTS,
  payload: {
    products,
  },
});

export const saveUsers = (users) => ({
  type: SAVE_USERS,
  payload: {
    users,
  },
});

export const saveOrders = (orders) => ({
  type: SAVE_ORDERS,
  payload: {
    orders,
  },
});

export const requestAllProducts = () => async (dispatch) => {
  dispatch(actionIsLoading(true));
  try {
    const response = await axios({
      method: 'get',
      url: 'http://localhost:3001/products',
      headers: {
        authorization: getUserInfo().token,
      },
    });
    console.log('response', response.data);
    dispatch(saveProducts(response.data));
    dispatch(actionIsLoading(false));
  } catch (e) {
    console.log(e);
    dispatch(actionIsLoading(false));
  }
};

export const actionChangeTotalValue = () => {
  const products = getProductsCarrinho();
  if (products.length === 0) {
    return { type: CHANGE_TOTAL_VALUE, payload: { totalValue: 0 } };
  }
  const totalValue = products.reduce(
    (acc, product) => acc + Number(product.price) * product.quantity,
    0,
  );
  return { type: CHANGE_TOTAL_VALUE, payload: { totalValue } };
};

export const requestAllUsers = () => async (dispatch) => {
  dispatch(actionIsLoading(true));
  try {
    const response = await axios({
      method: 'get',
      url: 'http://localhost:3001/get/users',
      headers: {
        authorization: getUserInfo().token,
      },
    });
    console.log('response', response.data);
    dispatch(saveUsers(response.data));
    dispatch(actionIsLoading(false));
  } catch (e) {
    console.log(e);
    dispatch(actionIsLoading(false));
  }
};

export const requestAllOrders = () => async (dispatch) => {
  dispatch(actionIsLoading(true));
  try {
    const response = await axios({
      method: 'get',
      url: 'http://localhost:3001/client/orders',
      headers: {
        authorization: getUserInfo().token,
      },
    });
    console.log('response', response.data);
    dispatch(saveOrders(response.data));
    dispatch(actionIsLoading(false));
  } catch (e) {
    console.log(e);
    dispatch(actionIsLoading(false));
  }
};
