import { combineReducers } from 'redux';
import productReducer from './products';
import userReducer from './user';
import orderReducer from './order';

const rootReducer = combineReducers({ productReducer, userReducer, orderReducer });

export default rootReducer;
