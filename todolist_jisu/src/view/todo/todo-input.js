import React, { useState } from "react";

// 컴포넌트는 무조건 대문자로 시작해야함
function TodoInput(props) {
  const [todovalue, setTodovalue] = useState("");

  // 입력시 값이 변경될 때 마다 onChange 이벤트 처리를 위한 customHandleChange function
  const handleChangeTodovalue = ({ target: { value } }) => {
    setTodovalue(value);
    // // 디바운싱 (주로 axios 요청시 쓰임)
    // var debounce;
    // if (debounce) {
    //   clearTimeout(debounce);
    // }
    // debounce = setTimeout(() => {
    //   console.log(todovalue);
    // }, 300);
  };

  return (
    // {/*주석처리방식*/}
    <section>
      <input
        type="text"
        value={todovalue}
        onChange={handleChangeTodovalue}
      ></input>
      {/*button type이 submit인 경우, 해당 페이지가 rerender됨*/}
      {/* 상위 컴포넌트로 데이터 전송은 props를 이용해 상위 컴포넌트의
      setState를 사용한다. */}
      <button
        type="button"
        onClick={() => {
          return props.handleCallbackTodo(todovalue);
        }}
      >
        추가
      </button>
    </section>
  );
}
export default TodoInput;
