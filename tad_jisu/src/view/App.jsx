import { Link, Route, Routes } from "react-router-dom";

import Login from "./login/login.jsx";
import TodoIndex from "./todo/index.jsx";
import Done from "./done/done.jsx";

export default function App() {
  return (
    <>
      <title>Todo and Done List</title>
      <header>
        <div className="title">Todo and Done List</div>
        <Link to="/">
          <button>Login</button>
        </Link>
        <Link to="/todo">
          <button>Todo</button>
        </Link>
        <Link to="/done">
          <button>Done</button>
        </Link>
      </header>
      <main>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route path="todo/*" element={<TodoIndex />}></Route>
          <Route path="/done" element={<Done />}></Route>
        </Routes>
      </main>
    </>
  );
}
