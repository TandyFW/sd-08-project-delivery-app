import { SAVE_ORDERS } from '../actions/index.action';

const INITIAL_STATE = {
  orders: [],
};

export default function ordersReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SAVE_ORDERS:
    return { ...state, orders: action.payload.orders };
  default:
    return state;
  }
}
