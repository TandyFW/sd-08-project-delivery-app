import { SAVE_USERS } from '../actions/index.action';

const INITIAL_STATE = {
  users: [],
};

export default function usersReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SAVE_USERS:
    return { ...state, users: action.payload.users };
  default:
    return state;
  }
}
