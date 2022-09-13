import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { getFullDate } from "lib/getTime.js";

import TodoDetail from "./components/todo-detail.jsx";
import TodoModal from "./components/todo-modal.jsx";

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
    setNowDate(getFullDate());
    props.setAppTitle(
      `오늘은 ${new Date().getMonth() + 1}월 ${new Date().getDate()}일~!`
    );
  }, [props]);

  useEffect(() => {
    navigate(nowDate);
  }, [nowDate, navigate]);

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
          <Box className="modal-box">
            <TodoModal type={modalType} handleClose={handleClose} />
          </Box>
        </Modal>
      </footer>
    </>
  );
}
