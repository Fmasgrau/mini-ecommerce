import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "../actions/actionTypes";
import { CounterActionTypes } from "../actions/types";

const initialState = {
  value: 0,
};

const count = (state = initialState, action: CounterActionTypes): any => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { ...state, value: state.value + 1 };
    case DECREMENT_COUNTER:
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
};
export default count;
