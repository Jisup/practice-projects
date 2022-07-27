import { connect } from "react-redux";

import "./todo-modal.scss";
import todoReducer from "reducer/combine/todoReducer";
import { useState, usetEffect } from "react";

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

  const addTag = () => {
    setTodoTagList([...todoTagList, todoTag]);
    setTodoTag("");
  };

  const deleteTodoTag = (e) => {
    const tagItem = e.target.closest("span");
    if (tagItem) {
      var { index } = tagItem.dataset;
      var newTodoTagList = [...todoTagList];
      newTodoTagList.splice(index, 1);
      setTodoTagList(newTodoTagList);
    }
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
    if (!todoTitle || !todoContent || !todoDate) {
      return;
    }
    setTodoList(newTodo);
    props.handleClose();
  };

  return (
    <div
      className={`todo-modal-components ${
        props.modalOpen ? "modal-open" : "modal-close"
      }`}
    >
      <div className="todo-modal-create-title">
        <input
          type="text"
          value={todoTitle}
          onChange={handleTitle}
          placeholder="타이틀"
        />
      </div>
      <div className="todo-modal-create-tag">
        <input
          type="text"
          value={todoTag}
          onChange={handleTag}
          onKeyUp={(e) => {
            if (e.keyCode === 13) addTag();
          }}
          placeholder="태그"
        />
      </div>
      <div className="todo-modal-create-tagList">
        {todoTagList.map((todoTag, index) => {
          return (
            <span className={`todoTag-${index}`} data-index={index} key={index}>
              {todoTag}
              <button className="delete-button" onClick={deleteTodoTag}>
                x
              </button>
            </span>
          );
        })}
      </div>
      <div className="todo-modal-create-content">
        <textarea
          value={todoContent}
          onChange={handleContent}
          placeholder="내용"
        />
      </div>
      <div className="todo-modal-create-date">
        <input
          value={todoDate}
          onChange={handleDate}
          type="date"
          className="todo-modal-create-startDate"
        />
      </div>
      <button onClick={addTodoList}>추가</button>
    </div>
  );
}
