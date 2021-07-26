import { STORE_EMAIL } from '../actions/index.action';

const INITIAL_STATE = {
  email: '',
};

export default function loginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case STORE_EMAIL:
    return { ...state, email: action.payload };
  default:
    return state;
  }
}
