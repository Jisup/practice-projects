import { connect } from "react-redux";

import "./todo-modal.scss";
import todoReducer from "reducer/combine/todoReducer";
import { useState } from "react";

const mapStateToProps = ({ todoReducer }) => {
  return {
    todoList: todoReducer.todoList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTodoList: (payload) => {
      dispatch({ type: "SET_TODOLIST", todolist: payload });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoModal);

function TodoModal(props, { setTodoList }) {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoTag, setTodoTag] = useState("");
  const [todoTagList, setTodoTagList] = useState([]);
  const [todoContent, setTodoContent] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleTitle = ({ target: { value } }) => {
    setTodoTitle(value);
  };
  const handleTag = ({ target: { value } }) => {
    setTodoTag(value);
  };
  const handleContent = ({ target: { value } }) => {
    setTodoContent(value);
  };
  const handleDate = ({ target: { value } }) => {
    setTodoDate(value);
  };

  const addTodoList = () => {
    const newTodo = {
      // todoId: Math.random().toString(36).substring(2, 11),
      todoId: new Date().getTime().toString(36),
      title: todoTitle,
      tag: todoTagList,
      content: todoContent,
      startDate: todoDate,
      endDate: "",
      outOfDate: 0,
      type: "예정",
      // inComplete -> begin -> going -> complete :: 미완/예정/진행/완료
    };
    // setTodoList(newTodo);
  };

  return (
    <div
      className={`todo-modal-components ${
        props.modalOpen ? "modal-open" : "modal-close"
      }`}
    >
      {/* 
        1. 타이틀입력
        2. 태그입력
        3. 내용입력
        4. 시작날짜 및 시간 선택
        5. 종료날짜 default "0" -> 완료로 옮겨지는 시점에 입력됨
        6. 미룬날짜 default "0" -> = 오늘 - 시작날짜
        7. 타입 default "예정"
        */}
      <input
        type="text"
        value={todoTitle}
        onChange={handleTitle}
        placeholder="타이틀"
      ></input>
      <input
        type="text"
        value={todoTag}
        onChange={handleTag}
        placeholder="태그"
      ></input>
      <div className="tagList"></div>
      <textarea
        value={todoContent}
        onChange={handleContent}
        placeholder="내용"
      ></textarea>
      <input value={todoDate} onChange={handleDate} type="date"></input>
      <button onClick={props.handleClose}>추가</button>
    </div>
  );
}
