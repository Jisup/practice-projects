import { useEffect } from "react";

export default function Todolist(props) {
  useEffect(() => {}, [props.todoList]);
  return (
    <div className="todolist-component">
      {props.todoList.map((todo, index) => {
        return (
          <div className="todo" key={index}>
            {todo}
          </div>
        );
      })}
    </div>
  );
}
