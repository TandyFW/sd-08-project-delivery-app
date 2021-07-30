import { DATA_LOGIN, ALL_USER } from '../actions';

const INITIAL_STATE = {
  dataLogin: {},
  allUsers: [],
};

export default function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case DATA_LOGIN:
    return {
      ...state, dataLogin: action.payload,
    };
  case ALL_USER:
    return {
      ...state, allUsers: action.payload,
    };
  default:
    return state;
  }
}
