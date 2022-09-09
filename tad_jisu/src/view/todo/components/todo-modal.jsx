import { useState, usetEffect } from "react";
import { connect } from "react-redux";

import "./todo-modal.scss";
import todoReducer from "reducer/combine/todoReducer";
import Simple from "./modal/make-simple.jsx";
import Detail from "./modal/make-detail.jsx";

const mapStateToProps = ({ todoReducer }) => {
  return {
    todoList: todoReducer.todoList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoModal);

function TodoModal(props) {
  console.log(props.type);

  return (
    <div
      className={`todo-modal-components ${
        props.modalOpen ? "modal-open" : "modal-close"
      }`}
    >
      <span id="modal-title">🐇 해야할 일 🥕</span>
      {props.type ? (
        <Simple handleClose={props.handleClose} />
      ) : (
        <Detail handleClose={props.handleClose} />
      )}
    </div>
  );
}
