import React from "react";
import { MdAdd } from "react-icons/md";
import "../style/TodoInsert.scss";

function TodoInsert() {
  return (
    <form className="TodoInsert">
      <input placeholder="할 일을 입력하세요" />
      <button type="submit">
        <MdAdd></MdAdd>
      </button>
    </form>
  );
}

export default TodoInsert;
