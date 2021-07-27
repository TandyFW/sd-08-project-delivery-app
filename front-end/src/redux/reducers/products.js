import { PROD_LIST } from '../actions';

const INITIAL_STATE = {
  products: [{}],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
  case PROD_LIST:
    return {
      ...state, products: action.array,
    };
  default:
    return state;
  }
}
