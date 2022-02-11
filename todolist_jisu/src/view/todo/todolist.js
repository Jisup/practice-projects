import React, { useEffect, useState } from "react";

function Todolist(props) {
  return (
    <section>
      {props.todolist.map((todo, index) => {
        console.log(todo);
        return (
          <article key={index}>
            <main className="todo">{todo}</main>
          </article>
        );
      })}
    </section>
  );
}
export default Todolist;
