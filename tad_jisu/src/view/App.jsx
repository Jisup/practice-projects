import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { connect } from "react-redux";

import "./App.scss";
import Login from "./login/login.jsx";
import LoginSuccess from "./login/login-success.jsx";
import TodoIndex from "./todo/index.jsx";
import Done from "./done/done.jsx";

const mapStateToProps = ({ appReducer }) => {
  return {
    appTitle: appReducer.appTitle,
  };
};

export default connect(mapStateToProps, null)(App);

function App(props) {
  const location = useLocation();

  return (
    <div className="app-components">
      <title>Todo and Done List</title>
      <header className="title">{props.appTitle}</header>
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
