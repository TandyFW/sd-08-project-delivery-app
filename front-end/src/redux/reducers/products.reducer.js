import { SAVE_PRODUCTS, CHANGE_TOTAL_VALUE } from '../actions/index.action';

const INITIAL_STATE = {
  products: [],
  totalValue: 0,
};

export default function productsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SAVE_PRODUCTS:
    return { ...state, products: action.payload.products };
  case CHANGE_TOTAL_VALUE:
    return { ...state, totalValue: action.payload.totalValue };
  default:
    return state;
  }
}
