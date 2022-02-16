import React from "react";
import TodoListItem from "./TodoListItem";
import "../style/TodoList.scss";

function TodoList() {
  return (
    <div className="TodoList">
      <TodoListItem></TodoListItem>
      <TodoListItem></TodoListItem>
      <TodoListItem></TodoListItem>
    </div>
  );
}
export default TodoList;
