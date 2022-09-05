import { useState } from "react";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";

import "./detail.scss";
import todoReducer from "reducer/combine/todoReducer";

const mapStateToProps = ({ todoReducer }) => {
  return {
    todoList: todoReducer.todoList,
  };
};

// const setTodoList = (payload) => ({ type: "SET_TODOLIST", todolist: payload });

const mapDispatchToProps = (dispatch) => {
  return {
    setTodoList: (payload) =>
      dispatch({ type: "SET_TODOLIST", todoList: payload }),
    // return bindActionCreators({ setTodoList }, dispatch);
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);

function Detail(props) {
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
    const tagItem = e.target.closest("button");
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
    console.log(props);
    props.setTodoList(newTodo);
    props.handleClose();
  };

  return (
    <div className="todo-detail-modal">
      <div className="create-title">
        <label>
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
      <div className="create-tag">
        <label>태그</label>
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
      <div className="create-tagList">
        {todoTagList.map((todoTag, index) => {
          return (
            <button
              className={`button-black todoTag-${index}`}
              data-index={index}
              key={index}
              onClick={deleteTodoTag}
            >
              <p>{todoTag}</p>
            </button>
          );
        })}
        {todoTagList != 0 ? (
          <label className="info">※ 태그 클릭 시 제거되요!</label>
        ) : null}
      </div>
      <div className="create-content">
        <label>내용</label>
        <textarea
          id="contents"
          value={todoContent}
          onChange={handleContent}
          placeholder="내용"
        />
      </div>
      <div className="create-date">
        <label>
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
