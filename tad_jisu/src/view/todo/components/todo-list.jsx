import { useEffect, useState } from "react";
import { connect } from "react-redux";

import "./todo-list.scss";

import { getFullDate } from "lib/getTime";

const mapStateToProps = ({ todoReducer }) => {
  return { todoList: todoReducer.todoList };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTodoList: (todoId) => dispatch({ type: "GET_TODOLIST", todoId }),
    delTodoList: (todoId) => {
      dispatch({ type: "DEL_TODOLIST", todoId });
    },
    setDoneList: (doneList) => {
      dispatch({ type: "SET_DONELIST", doneList });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

function TodoList(props) {
  const [todayTodoList, setTodayTodoList] = useState([]);

  const clickDelete = (e) => {
    const $todo = e.target.closest(".todo");
    const { todoId } = $todo.dataset;
    props.delTodoList(todoId);
  };

  const clickComplete = (e) => {
    const $todo = e.target.closest(".todo");
    const { todoId } = $todo.dataset;
    const newDone = props.todoList.find((todo) => todo.todoId === todoId);
    newDone.endDate = getFullDate();
    newDone.outOfDate =
      (new Date(newDone.endDate) - new Date(newDone.startDate)) /
      (1000 * 60 * 60 * 24);
    newDone.actionType = "완료";
    props.setDoneList(newDone);
    props.delTodoList(todoId);
  };

  useEffect(() => {
    setTodayTodoList(
      props.todoList.filter((todo) => todo.startDate === props.startDate)
    );
  }, [props.startDate, props.todoList]);

  return (
    <div className="todolist-component">
      {todayTodoList.map((todo, index) => {
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
