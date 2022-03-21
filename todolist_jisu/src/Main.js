import "style/main.scss";
import React, { useState, useEffect } from "react";

import TodoInput from "./view/todo/todo-input";
import Todolist from "./view/todo/todo-list";

function Main() {
  const [todolist, setTodolist] = useState([]);

  const handleCallbackTodo = (todovalue) => {
    setTodolist([...todolist, todovalue]);
  };

  useEffect(() => {
    console.log(todolist);
  }, [todolist]);

  return (
    <div className="main">
      <nav className="main-nav"></nav>
      <header className="main-header">Todo List</header>
      <main>
        <aside className="left-aside">빈곳</aside>
        <section>
          <article>
            <TodoInput handleCallbackTodo={handleCallbackTodo}></TodoInput>
            <Todolist todolist={todolist}></Todolist>
          </article>
        </section>
        <aside className="right-aside">빈곳</aside>
      </main>
      <footer></footer>
    </div>
  );
}

export default Main;
