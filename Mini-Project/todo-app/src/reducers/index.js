import { combineReducers } from "redux";
import todosReducer from "./todos";

const allReducers = combineReducers({
  todosReducer,
});

export default allReducers;
