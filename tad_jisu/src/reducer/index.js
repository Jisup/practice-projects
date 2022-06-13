import { combineReducers } from "redux";
import todoReducer from "./combine/todoReducer";
import doneReducer from "./combine/doneReducer";

const combinedReducers = combineReducers({
  todoReducer,
  doneReducer,
});

const reducer = (state, action) => {
  return combinedReducers(state, action);
};

export default reducer;
