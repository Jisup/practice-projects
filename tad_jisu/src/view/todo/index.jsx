import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import TodoDetail from "./components/todo-detail.jsx";
import TodoModal from "./components/todo-modal.jsx";
import todoReducer from "reducer/combine/todoReducer";

import "./index.scss";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const mapDispatchToProps = (dispatch) => {
  return {
    setAppTitle: (payload) =>
      dispatch({ type: "SET_APPTITLE", appTitle: payload }),
  };
};

export default connect(null, mapDispatchToProps)(TodoIndex);

function TodoIndex(props) {
  const navigate = useNavigate();
  const [nowDate, setNowDate] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState(false);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);
  const handleChangeDate = (e) => {
    setNowDate(e.target.value);
    navigate(e.target.value);
  };

  const clickMakeButton = (type) => {
    setModalType(type);
    handleOpen();
  };

  useEffect(() => {
    setNowDate(
      new Date()
        .toLocaleString()
        .slice(0, 10)
        .replace(/[.]/g, "-")
        .replace(/[ ]/g, "0")
    );
    props.setAppTitle(
      `오늘은 ${new Date().getMonth() + 1}월 ${new Date().getDate()}일~!`
    );
  }, []);

  useEffect(() => {
    navigate(nowDate);
  }, [nowDate]);

  return (
    <>
      <title>Todo Index Page</title>
      <header>
        <label htmlFor="date">날짜 선택하기</label>
        <input
          id="date"
          type="date"
          value={nowDate}
          onChange={handleChangeDate}
        ></input>
      </header>
      <section>
        <Routes>
          <Route path=":startDate" element={<TodoDetail />}></Route>
        </Routes>
      </section>
      <footer>
        <button onClick={() => clickMakeButton(true)}>🐇 쉽게</button>
        <button onClick={() => clickMakeButton(false)}>🥕 자세하게</button>
        <Modal open={modalOpen} onClose={handleClose}>
          <Box sx={style}>
            <TodoModal type={modalType} handleClose={handleClose} />
          </Box>
        </Modal>
      </footer>
    </>
  );
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "25%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
