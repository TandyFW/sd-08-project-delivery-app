import { SAVE_ORDERS, REQUEST_ORDERS_SELLER } from '../actions/index.action';

const INITIAL_STATE = {
  orders: [],
  sellerOrders: [],
};

export default function ordersReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SAVE_ORDERS:
    return { ...state, orders: action.payload.orders };
  case REQUEST_ORDERS_SELLER:
    return { ...state, sellerOrders: action.payload.orders };
  default:
    return state;
  }
}
