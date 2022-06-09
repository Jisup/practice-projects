import { useEffect, useState } from "react";

import "./todo-list.scss";

export default function TodoList({ todoList, deleteTodoList }) {
  const modifyTodo = (e) => {};
  const deleteTodo = (e) => {
    const $todo = e.target.closest(".todo");
    const { todoId } = $todo.dataset;
    deleteTodoList(todoId);
  };

  useEffect(() => {
    // console.log(todoList);
  }, [todoList]);

  return (
    <div className="todolist-component">
      {todoList.map((todo, index) => {
        return (
          <div className="todo" data-todo-id={todo.todoId} key={index}>
            <div className="todo-title">{todo.title}</div>
            <div className="todo-buttons">
              <button onClick={modifyTodo}>수정</button>
              <button onClick={deleteTodo}>삭제</button>
              <button onClick={deleteTodo}>완료</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
