import { ISLOADING } from '../actions/index.action';

const INITIAL_STATE = {
  isLoading: true,
};

export default function loadingReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ISLOADING:
    return { ...state, isLoading: action.payload.isLoading };
  default:
    return state;
  }
}
