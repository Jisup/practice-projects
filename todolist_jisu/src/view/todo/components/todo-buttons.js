import React from "react";
import { CTColorButton, MUColorButton } from "style/todo/style-todo";

function TodoButtons() {
  return (
    <div className="todo-buttons">
      <CTColorButton className="todo-button" id="todo-modify" color="blue">
        수정
      </CTColorButton>
      <MUColorButton className="todo-button" variant="contained" id="todo-copy">
        복사
      </MUColorButton>
      {/* 현재 variant={variant}로 attrs를 통해 설정 성공하지 못함 */}
      <MUColorButton
        className="todo-button"
        // variant="outlined"
        id="todo-delete"
        color="red"
      >
        삭제
      </MUColorButton>
    </div>
  );
}
export default TodoButtons;
