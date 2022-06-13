import { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";

import "./todo-list.scss";
import todoReducer from "reducer/combine/todoReducer";

const mapStateToProps = ({ todoReducer }) => {
  return { todoList: todoReducer.todoList };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTodoList: (todoId) => dispatch({ type: "GET_TODOLIST", todoId }),
    modifyTodoList: () => dispatch({ type: "MOD_TODOLIST" }),
    deleteTodoList: (todoId) => {
      dispatch({ type: "DEL_TODOLIST", todoId });
    },
    setDoneList: (doneList) => {
      dispatch({ type: "SET_DONELIST", doneList });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

function TodoList({
  todoList,
  getTodoList,
  modifyTodoList,
  deleteTodoList,
  setDoneList,
}) {
  const clickDelete = (e) => {
    const $todo = e.target.closest(".todo");
    const { todoId } = $todo.dataset;
    deleteTodoList(todoId);
  };

  const clickComplete = (e) => {
    const $todo = e.target.closest(".todo");
    const { todoId } = $todo.dataset;
    const newDone = todoList.find((todo) => todo.todoId === todoId);
    setDoneList(newDone);
    deleteTodoList(todoId);
  };

  return (
    <div className="todolist-component">
      {todoList.map((todo, index) => {
        return (
          <div className="todo" data-todo-id={todo.todoId} key={index}>
            <div className="todo-title">{todo.title}</div>
            <div className="todo-buttons">
              <button>수정</button>
              <button onClick={clickDelete}>삭제</button>
              <button onClick={clickComplete}>완료</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
