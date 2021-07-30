import { getAllUsers } from '../../services';

export const PROD_LIST = 'PROD_LIST';
export const CART = 'CART';
export const DATA_LOGIN = 'LOGIN_LOGIN';
export const ALL_USER = 'ALL_USER';
export const USER = 'USER';

export const productsAction = (array) => ({
  type: PROD_LIST,
  array,
});

export const cartAction = (array) => ({
  type: CART,
  array,
});

export const usersAction = (dataUser) => ({
  type: USER,
  payload: dataUser,
});

export const loginAction = (infoLoginAccess) => ({
  type: DATA_LOGIN,
  payload: infoLoginAccess,
});

const allUserAction = (allUsers) => ({
  type: ALL_USER,
  payload: allUsers,
});

export const getAllUsersApi = () => async (dispatch) => {
  const { registers } = await getAllUsers();
  dispatch(allUserAction(registers));
};
