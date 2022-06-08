import { useState } from "react";
import { setLocalStorage } from "lib/localStorage.js";

import Todolist from "./components/todolist.jsx";

export default function Todo() {
  const [todoWrite, setTodoWrite] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChangeTodoWrite = ({ target: { value } }) => {
    setTodoWrite(value);
  };

  const handleSendTodoWrite = () => {
    setTodoList([todoWrite, ...todoList]);
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
        onChange={handleChangeTodoWrite}
        onKeyUp={(e) => {
          if (e.keyCode === 13) handleSendTodoWrite();
        }}
      ></input>
      <button onClick={handleSendTodoWrite}>추가</button>
      <Todolist todoList={todoList} />
    </div>
  );
}
