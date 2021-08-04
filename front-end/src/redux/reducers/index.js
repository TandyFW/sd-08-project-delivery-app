import { combineReducers } from 'redux';
import productReducer from './products';
// import processReducer from './process';
import userReducer from './user';
import ordesReducer from './ordes';

const rootReducer = combineReducers({ productReducer,
  userReducer,
  ordesReducer,
  // processReducer,
});

export default rootReducer;
