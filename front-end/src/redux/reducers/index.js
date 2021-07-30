import { combineReducers } from 'redux';
import products from './products';
import user from './user';

const rootReducer = combineReducers({ products, user });

export default rootReducer;
