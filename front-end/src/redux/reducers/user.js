import { LOGIN, USERS } from '../actions';

const INITIAL_STATE = {
  user: [],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN:
    return {
      ...state, user: action.array,
    };
  case USERS:
    return {
      ...state, users: action.array,
    };
  default:
    return state;
  }
}
