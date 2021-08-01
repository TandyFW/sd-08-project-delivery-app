import { PROD_LIST, CART } from '../actions';

const INITIAL_STATE = {
  products: [],
  cart: [],
};

export default function productReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case PROD_LIST:
    return {
      ...state, products: action.array,
    };
  case CART:
    return {
      ...state, cart: action.array,
    };
  default:
    return state;
  }
}
