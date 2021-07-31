import { ALL_ORDES, ORDES } from '../actions';

const INITIAL_STATE = {
  allOrdes: [],
  orde: {},
};

export default function ordesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ORDES: return {
    ...state,
    orde: action.payload,
  };
  case ALL_ORDES:
    return {
      ...state, allOrdes: action.payload,
    };
  default:
    return state;
  }
}
