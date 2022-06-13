import types from "../types.js";
import { getLocalStorage, setLocalStorage } from "lib/localStorage.js";

const initialState = {
  todoList: getLocalStorage("todoList") ? getLocalStorage("todoList") : [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_TODOLIST:
      return state;
    case types.SET_TODOLIST:
      const setTodoList = [...state.todoList, action.todoList];
      setLocalStorage(setTodoList, "todoList");
      return { todoList: setTodoList };
    case types.MOD_TODOLIST:
      return state;
    case types.DEL_TODOLIST:
      const delTodoId = action.todoId;
      const delTodoList = state.todoList.filter(
        (item) => item.todoId !== delTodoId
      );
      setLocalStorage(delTodoList, "todoList");
      return { todoList: delTodoList };

    default:
      return state;
  }
};

export default todoReducer;
