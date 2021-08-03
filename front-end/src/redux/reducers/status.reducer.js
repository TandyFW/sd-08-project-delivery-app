import { STATUS_CHANGE } from '../actions/index.action';

const INITIAL_STATE = {
  status: 'Pendente',
};

export default function status(state = INITIAL_STATE, action) {
  switch (action.type) {
  case STATUS_CHANGE:
    return { ...state, status: action.payload.status };
  default:
    return state;
  }
}
