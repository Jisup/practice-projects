import { connect } from "react-redux";
import { useEffect, useState } from "react";
import todoReducer from "reducer/combine/todoReducer";

import "./todo-list.scss";

const mapStateToProps = ({ todoReducer }) => {
  return { todoList: todoReducer.todoList };
};

const mapDispatchToProps = (dispatch) => {
  return {
    modifyTodoList: () => dispatch({ type: "MOD_TODOLIST" }),
    deleteTodoList: (e) => {
      const $todo = e.target.closest(".todo");
      const { todoId } = $todo.dataset;
      dispatch({ type: "DEL_TODOLIST", todoId });
    },
    completeTodoList: () => dispatch({ type: "COM_TODOLIST" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

function TodoList({
  todoList,
  modifyTodoList,
  deleteTodoList,
  completeTodoList,
}) {
  useEffect(() => {
    // console.log(todoList);
  }, [todoList]);

  return (
    <div className="todolist-component">
      {todoList.map((todo, index) => {
        return (
          <div className="todo" data-todo-id={todo.todoId} key={index}>
            <div className="todo-title">{todo.title}</div>
            <div className="todo-buttons">
              <button>수정</button>
              <button onClick={deleteTodoList}>삭제</button>
              <button>완료</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
