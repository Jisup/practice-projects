import types from "../types.js";

const initialState = {
  appTitle: "",
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_APPTITLE:
      return state;
    case types.SET_APPTITLE:
      return { appTitle: action.appTitle };
    default:
      return state;
  }
};

export default appReducer;
