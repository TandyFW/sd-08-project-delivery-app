import { ALL_ORDER, ORDER } from '../actions';

const INITIAL_STATE = {
  allOrder: [],
  order: {},
};

export default function orderReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ORDER: return {
    ...state,
    order: action.payload,
  };
  case ALL_ORDER:
    return {
      ...state, allOrder: action.payload,
    };
  default:
    return state;
  }
}
