import { combineReducers } from "redux";
import CounterReducer from "../features/counter/reducer/counterReducer";

const rootReducer = combineReducers({
  count: CounterReducer,
});

export default rootReducer;
