import { SAVE_PRODUCTS } from '../actions/index.action';

const INITIAL_STATE = {
  products: [],
};

export default function productsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SAVE_PRODUCTS:
    return { ...state, products: action.payload.products };
  default:
    return state;
  }
}
