const app = {
  GET_APPTITLE: "GET_APPTITLE",
  SET_APPTITLE: "SET_APPTITLE",
};

const todo = {
  GET_TODOLIST: "GET_TODOLIST",
  SET_TODOLIST: "SET_TODOLIST",
  MOD_TODOLIST: "MOD_TODOLIST",
  DEL_TODOLIST: "DEL_TODOLIST",
};

const done = {
  GET_DONELIST: "GET_DONELIST",
  SET_DONELIST: "SET_DONELIST",
  MOD_DONELIST: "MOD_DONELIST",
};

const types = {
  ...app,
  ...todo,
  ...done,
};

export default types;
