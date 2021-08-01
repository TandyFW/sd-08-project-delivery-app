import { getAllUsers, getAllOrdersForSeller, getAllOrdersForUser } from '../../services';

export const PROD_LIST = 'PROD_LIST';
export const CART = 'CART';
export const LOGIN = 'LOGIN';
export const USERS = 'USERS';
export const DATA_LOGIN = 'LOGIN_LOGIN';
export const ALL_USER = 'ALL_USER';
export const USER = 'USER';
export const ORDER = 'ORDER';
export const ALL_ORDER = 'ALL_ORDER';

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

export const allUsersAction = (array) => ({
  type: USERS,
  array,
});
export const usersAction = (dataUser) => ({
  type: USER,
  payload: dataUser,
});

// export const loginAction = (infoLoginAccess) => ({
//   type: DATA_LOGIN,
//   payload: infoLoginAccess,
// });

const allUserAction = (allUsers) => ({
  type: ALL_USER,
  payload: allUsers,
});

export const getAllUsersApi = () => async (dispatch) => {
  const { registers } = await getAllUsers();
  dispatch(allUserAction(registers));
};

const allOrdesAction = (allOrdes) => ({
  type: ALL_ORDER,
  payload: allOrdes,
});

export const getAllOrdesByUserApi = () => async (dispatch) => {
  // const result = await getAllOrdersForUser();
  // console.log(result);
  const { orders } = await getAllOrdersForUser();
  dispatch(allOrdesAction(orders));
};

export const getAllOrdesBySellerApi = () => async (dispatch) => {
  const { order } = await getAllOrdersForSeller();
  dispatch(allOrdesAction(order));
};
