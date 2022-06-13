import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getLocalStorage, setLocalStorage } from "lib/localStorage.js";

import "./todo.scss";
import Todolist from "./components/todo-list.jsx";
import todoReducer from "reducer/combine/todoReducer";

function mapStateToProps({ todoReducer }) {
  return {
    todoList: todoReducer.todoList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setTodoList: (payload) => {
      console.log(payload);
      dispatch({ type: "SET_TODOLIST", todoList: payload });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);

function Todo({ setTodoList }) {
  const [todoWrite, setTodoWrite] = useState("");

  const changeTodoWrite = ({ target: { value } }) => {
    setTodoWrite(value);
  };

  const addTodoList = () => {
    const todoNewData = {
      // todoId: Math.random().toString(36).substring(2, 11),
      todoId: new Date().getTime().toString(36),
      title: todoWrite,
    };
    console.log(todoNewData);
    setTodoList(todoNewData);
    setTodoWrite("");
  };

  return (
    <div className="todo-component">
      <title>Todo List</title>
      <div className="title">This is Todo list</div>
      <input
        type="text"
        value={todoWrite}
        placeholder="오늘의 할일!"
        onChange={changeTodoWrite}
        onKeyUp={(e) => {
          if (e.keyCode === 13) addTodoList();
        }}
      ></input>
      <button onClick={addTodoList}>추가</button>
      <Todolist />
    </div>
  );
}
