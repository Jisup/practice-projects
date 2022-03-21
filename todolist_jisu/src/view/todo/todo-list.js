import "../../style/todo/todo.scss";
import React, { useEffect, useState } from "react";

import TodoButtons from "./components/todo-buttons";

function Todolist(props) {
  return (
    <section>
      {props.todolist.map((todo, index) => {
        console.log(todo);
        return (
          <article className={`todo-${index}`} key={index}>
            <main className="todo-item">
              <div className="todo-value">{todo}</div>
              <TodoButtons></TodoButtons>
            </main>
          </article>
        );
      })}
    </section>
  );
}
export default Todolist;
