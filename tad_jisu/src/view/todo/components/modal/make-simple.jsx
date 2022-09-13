import { useState } from "react";
import { connect } from "react-redux";

import "./make-simple.scss";
import todoReducer from "reducer/combine/todoReducer";

const mapStateToProps = ({ todoReducer }) => {
  return {
    todoList: todoReducer.todoList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTodoList: (payload) =>
      dispatch({ type: "SET_TODOLIST", todoList: payload }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MakeSimple);

function MakeSimple(props) {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleTitle = ({ target: { value } }) => {
    setTodoTitle(value);
  };

  const handleDate = ({ target: { value } }) => {
    setTodoDate(value);
  };

  const addTodoList = () => {
    const newTodo = {
      // todoId: Math.random().toString(36).substring(2, 11),
      todoId: new Date().getTime().toString(36),
      title: todoTitle,
      startDate: todoDate,
      endDate: "",
      outOfDate: 0,
      actionType: "예정",
      makeType: "detail",
      // inComplete -> begin -> going -> complete :: 미완/예정/진행/완료
    };
    props.setTodoList(newTodo);
    props.handleClose();
  };

  return (
    <div className="todo-simple-modal">
      <div className="create-title">
        <label htmlFor="title">
          타이틀<span>(*필수)</span>
        </label>
        <input
          id="title"
          type="text"
          value={todoTitle}
          onChange={handleTitle}
          placeholder="타이틀"
        />
      </div>

      <div className="create-date">
        <label htmlFor="date">
          날짜<span>(*필수)</span>
        </label>
        <input
          id="date"
          type="date"
          className="create-startDate"
          value={todoDate}
          onChange={handleDate}
        />
      </div>
      <div className="buttons">
        <button className="button-red" onClick={addTodoList}>
          초기화
        </button>
        <button className="button-green" onClick={addTodoList}>
          추가
        </button>
      </div>
    </div>
  );
}
