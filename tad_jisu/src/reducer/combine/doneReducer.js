import types from "../types.js";

const initialState = {
  doneList: [],
};

const doneReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DONELIST:
      return state;

    default:
      return state;
  }
};

export default doneReducer;
