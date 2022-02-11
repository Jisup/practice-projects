import React, { useState, useEffect } from "react";

import TodoInput from "./view/todo/todoinput";
import Todolist from "./view/todo/todolist";

function Main() {
  const [todolist, setTodolist] = useState([]);

  const handleCallbackTodo = (todovalue) => {
    setTodolist([...todolist, todovalue]);
  };

  useEffect(() => {
    console.log(todolist);
  }, [todolist]);

  return (
    <div className="Main">
      <header className="Main-header">Todo List</header>
      <section>
        <article>
          <TodoInput handleCallbackTodo={handleCallbackTodo}></TodoInput>
          <Todolist todolist={todolist}></Todolist>
        </article>
      </section>
      <footer></footer>
    </div>
  );
}

export default Main;
