import { getAllUsers, getAllOrdersForSeller, getAllOrdersForUser } from '../../services';

export const PROD_LIST = 'PROD_LIST';
export const CART = 'CART';
export const DATA_LOGIN = 'LOGIN_LOGIN';
export const ALL_USER = 'ALL_USER';
export const USER = 'USER';
export const ORDES = 'ORDES';
export const ALL_ORDES = 'ALL_ORDES';
// export const PROCESS = 'PROCESS';

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

export const allUsersAction = (payload) => ({
  type: ALL_USER,
  payload,
});

const allUserAction = (allUsers) => ({
  type: ALL_USER,
  payload: allUsers,
});

export const getAllUsersApi = () => async (dispatch) => {
  const { registers } = await getAllUsers();
  dispatch(allUserAction(registers));
};

const allOrdesAction = (allOrdes) => ({
  type: ALL_ORDES,
  payload: allOrdes,
});

export const getAllOrdesByUserApi = () => async (dispatch) => {
  // const result = await getAllOrdersForUser();
  // console.log(result);
  const { orders } = await getAllOrdersForUser();
  dispatch(allOrdesAction(orders));
};

export const getAllOrdesBySellerApi = () => async (dispatch) => {
  const { orders } = await getAllOrdersForSeller();
  dispatch(allOrdesAction(orders));
};

// export const process = (encrypt, text, cypher) => ({
//   type: PROCESS,
//   payload: {
//     encrypt,
//     text,
//     cypher,
//   },
// });
