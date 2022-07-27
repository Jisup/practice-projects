import { useState } from "react";
import { connect } from "react-redux";

import "./todo.scss";
import Todolist from "./components/todo-list.jsx";
import TodoModal from "./components/todo-modal";
import todoReducer from "reducer/combine/todoReducer";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const mapStateToProps = ({ todoReducer }) => {
  return {
    todoList: todoReducer.todoList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);

function Todo() {
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  return (
    <>
      <div className="todo-component">
        <title>Todo List</title>
        <header>
          <div className="title">This is Todo list</div>
        </header>
        <main>
          <button onClick={handleOpen}>todo추가</button>
          <Modal open={modalOpen} onClose={handleClose}>
            <Box sx={style}>
              <TodoModal handleClose={handleClose} />
            </Box>
          </Modal>
          <Todolist />
        </main>
      </div>
    </>
  );
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
