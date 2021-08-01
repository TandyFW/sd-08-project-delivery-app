import { combineReducers } from 'redux';
import productReducer from './products';
import userReducer from './user';
import ordesReducer from './ordes';

const rootReducer = combineReducers({ productReducer, userReducer, ordesReducer });

export default rootReducer;
