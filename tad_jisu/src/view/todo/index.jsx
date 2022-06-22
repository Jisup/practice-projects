import { Link, Route, Routes } from "react-router-dom";
import TodoDetail from "./components/todo-detail.jsx";

import Todo from "./todo.jsx";

export default function TodoIndex() {
  return (
    <>
      <title>Todo Index Page</title>
      <header>
        <Link to="1">
          <button>1 번으로</button>
        </Link>
        <Link to="2">
          <button>2 번으로</button>
        </Link>
        <Link to="3">
          <button>3 번으로</button>
        </Link>
      </header>
      <Routes>
        <Route exact path="/" element={<Todo />}></Route>
        <Route path=":id" element={<TodoDetail />}></Route>
      </Routes>
    </>
  );
}
