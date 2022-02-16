import React, { useState } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "밥먹기",
      checked: true,
    },
    {
      id: 2,
      text: "게임하기",
      checked: false,
    },
    {
      id: 3,
      text: "잠자기",
      checked: false,
    },
  ]);

  return (
    <TodoTemplate>
      <TodoInsert></TodoInsert>
      <TodoList todos={todos}></TodoList>
    </TodoTemplate>
  );
}

export default App;
