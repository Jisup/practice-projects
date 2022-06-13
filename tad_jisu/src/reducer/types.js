const todo = {
  GET_TODOLIST: "GET_TODOLIST",
  SET_TODOLIST: "SET_TODOLIST",
  DEL_TODOLIST: "DEL_TODOLIST",
};

const done = {
  GET_DONELIST: "GET_DONELIST",
};

const types = {
  ...todo,
  ...done,
};

export default types;
