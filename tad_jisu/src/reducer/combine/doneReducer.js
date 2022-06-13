import types from "../types.js";
import { getLocalStorage, setLocalStorage } from "lib/localStorage.js";

const initialState = {
  doneList: getLocalStorage("doneList") ? getLocalStorage("doneList") : [],
};

const doneReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DONELIST:
      return state;
    case types.SET_DONELIST:
      const setDoneList = [...state.doneList, action.doneList];
      setLocalStorage(setDoneList, "doneList");
      return { doneList: setDoneList };
    case types.MOD_DONELIST:
      return state;
    default:
      return state;
  }
};

export default doneReducer;
