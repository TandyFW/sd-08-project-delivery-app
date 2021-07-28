import { combineReducers } from 'redux';
import productReducer from './products';
import userReducer from './user';

const rootReducer = combineReducers({ productReducer, userReducer });

export default rootReducer;
