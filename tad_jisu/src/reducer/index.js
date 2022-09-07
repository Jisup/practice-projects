import { combineReducers } from "redux";
import todoReducer from "./combine/todoReducer.js";
import doneReducer from "./combine/doneReducer.js";
import appReducer from "./combine/appReducer.js";

const combinedReducers = combineReducers({
  appReducer,
  todoReducer,
  doneReducer,
});

const reducer = (state, action) => {
  return combinedReducers(state, action);
};

export default reducer;
