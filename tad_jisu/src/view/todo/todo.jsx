import { useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "lib/localStorage.js";

import "./todo.scss";
import Todolist from "./components/todo-list.jsx";

export default function Todo() {
  const [todoWrite, setTodoWrite] = useState("");
  const [todoList, setTodoList] = useState(getLocalStorage("todolist"));

  const changeTodoWrite = ({ target: { value } }) => {
    setTodoWrite(value);
  };

  const addTodoList = () => {
    const todoNewData = {
      // todoId: Math.random().toString(36).substring(2, 11),
      todoId: new Date().getTime().toString(36),
      title: todoWrite,
    };
    setTodoList([todoNewData, ...todoList]);
    setTodoWrite("");
  };

  const deleteTodoList = (deleteTodoListId) => {
    const newTodoList = todoList.filter(
      (todo) => todo.todoId != deleteTodoListId
    );
    console.log(newTodoList);
    setTodoList(newTodoList);
  };

  useEffect(() => {
    setLocalStorage(todoList, "todolist");
  }, [todoList]);

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
      <Todolist todoList={todoList} deleteTodoList={deleteTodoList} />
    </div>
  );
}
