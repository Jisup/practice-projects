import React from "react";
import "../style/TodoTemplate.scss";

function TodoTemplate({ children }) {
  return (
    <div className="TodoTemplate">
      <div className="app-title">📃ToDo List📃</div>
      <div className="content">{children}</div>
    </div>
  );
}

export default TodoTemplate;
