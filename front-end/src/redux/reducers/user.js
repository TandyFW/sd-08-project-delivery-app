import { DATA_LOGIN, ALL_USER, USERS, LOGIN } from '../actions';

const INITIAL_STATE = {
  dataLogin: {},
  allUsers: [],
  user: [],
  users: [],
};

export default function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN: return {
    ...state,
    user: action.array,
  };
  case DATA_LOGIN:
    return {
      ...state, user: action.payload, dataLogin: action.payload,
    };
  case ALL_USER:
    return {
      ...state, allUsers: action.payload,
    };
  case USERS:
    return {
      ...state, users: action.array,
    };
  default:
    return state;
  }
}
