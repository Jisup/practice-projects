import { useEffect, useState } from "react";
import { connect } from "react-redux";

import "./todo.scss";
import Todolist from "./components/todo-list.jsx";
import todoReducer from "reducer/combine/todoReducer";

const mapStateToProps = ({ todoReducer }) => {
  return {
    todoList: todoReducer.todoList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTodoList: (payload) => {
      dispatch({ type: "SET_TODOLIST", todoList: payload });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);

function Todo({ setTodoList }) {
  const [todoWrite, setTodoWrite] = useState("");

  const changeTodoWrite = ({ target: { value } }) => {
    setTodoWrite(value);
  };

  const addTodoList = () => {
    const newTodo = {
      // todoId: Math.random().toString(36).substring(2, 11),
      todoId: new Date().getTime().toString(36),
      title: todoWrite,
    };
    setTodoList(newTodo);
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
