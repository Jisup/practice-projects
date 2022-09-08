import { useParams } from "react-router-dom";

import "./todo-detail.scss";

import TodoList from "../components/todo-list.jsx";
import { useEffect } from "react";

export default function TodoDetail(props) {
  let params = useParams();

  return (
    <div className="todo-detail-components">
      <label>오늘 해야할 일...</label>
      <hr></hr>
      <TodoList startDate={params.startDate} />
    </div>
  );
}
