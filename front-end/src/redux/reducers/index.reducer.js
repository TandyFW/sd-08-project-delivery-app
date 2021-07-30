import { combineReducers } from 'redux';
import loginReducer from './login.reducer';
import loadingReducer from './loading.reducer';
import productsReducer from './products.reducer';
import usersReducer from './users.reducer';
import ordersReducer from './orders.reducers';

const rootReducer = combineReducers({
  loginReducer,
  loadingReducer,
  productsReducer,
  usersReducer,
  ordersReducer,
});

export default rootReducer;
