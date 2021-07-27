import { combineReducers } from 'redux';
import loginReducer from './login.reducer';
import loadingReducer from './loading.reducer';
import productsReducer from './products.reducer';

const rootReducer = combineReducers({ loginReducer, loadingReducer, productsReducer });

export default rootReducer;
