import { combineReducers } from 'redux';
import loginReducer from './login.reducer';
import loadingReducer from './loading.reducer';
import productsReducer from './products.reducer';
import usersReducer from './users.reducer';

const rootReducer = combineReducers({
  loginReducer,
  loadingReducer,
  productsReducer,
  usersReducer,
});

export default rootReducer;
