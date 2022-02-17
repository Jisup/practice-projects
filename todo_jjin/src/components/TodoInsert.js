import React, { useState, useCallback } from "react";
import { MdAdd } from "react-icons/md";
import "../style/TodoInsert.scss";

function TodoInsert({ onInsert }) {
  const [value, setValue] = useState("");

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  // form 제출 시 실행됨
  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue("");

      //submit은 브라우저에서 새로고침을 발생시킴 -> 막기
      e.preventDefault();
    },
    //
    [onInsert, value]
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd></MdAdd>
      </button>
    </form>
  );
}

export default TodoInsert;
