import { DATA_LOGIN, ALL_USER, USER } from '../actions';

const INITIAL_STATE = {
  dataLogin: {},
  allUsers: [],
  user: {},
};

export default function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case USER: return {
    ...state,
    user: action.payload,
  };
  case DATA_LOGIN:
    return {
      ...state, user: action.payload, dataLogin: action.payload,
    };
  case ALL_USER:
    return {
      ...state, allUsers: action.payload,
    };
  default:
    return state;
  }
}
