import { getAllUsers } from '../../services';

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
const user = (array) => {
  console.log(array);
  return array;
};

// export const userAction = async () => {
//   const users = await getAllUsers() || [{}];
//   const result = user(users.registers);
//   return { type: USER, users: result };
// };

export const addExpenseWithCurrenciesAction = (expense) => async (dispatch) => {
  const currenciesValues = await getCurrenciesValues();
  const newExpense = { ...expense, exchangeRates: currenciesValues };
  dispatch(addExpenseAction(newExpense));
};

export const userAction = (expense) => async (dispatch) => {
  const users = await getAllUsers();
  const newUsers = { ...expense, type: USER, users };
  dispatch(addExpenseAction(newUsers));
};

// userCathAction().then(console.log);
