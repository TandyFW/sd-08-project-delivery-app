import axios from 'axios';
import getLocalStorage from '../../service/getLocalStorage';

export const STORE_EMAIL = 'STORE_EMAIL';
export const REQUEST_ALL_PRODUCTS = 'REQUEST_ALL_PRODUCTS';
export const ISLOADING = 'ISLOADING';
export const SAVE_PRODUCTS = 'SAVE_PRODUCTS';

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

export const requestAllProducts = () => async (dispatch) => {
  dispatch(actionIsLoading(true));
  try {
    const response = await axios({
      method: 'get',
      url: 'http://localhost:3001/products',
      headers: {
        authorization: getLocalStorage().token,
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
