import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import "./App.scss";
import Login from "./login/login.jsx";
import LoginSuccess from "./login/login-success.jsx";
import TodoIndex from "./todo/index.jsx";
import Done from "./done/done.jsx";

export default function App() {
  const location = useLocation();
  const [title, setTitle] = useState("");

  useEffect(() => {
    const { pathname } = location;
    var tempTitle = "";
    switch (pathname) {
      case "/":
        tempTitle = "Todo and Done List";
        break;
      case "/login":
        tempTitle = "오늘은 어떤 일을?";
        break;
    }
    setTitle(tempTitle);
  }, [location.pathname]);

  return (
    <div className="app-components">
      <title>Todo and Done List</title>
      <header className="title">{title}</header>
      <section>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route path="/login" element={<LoginSuccess />}></Route>
          <Route path="todo/*" element={<TodoIndex />}></Route>
          <Route path="/done" element={<Done />}></Route>
        </Routes>
      </section>
      <footer>@z6su3</footer>
    </div>
  );
}
