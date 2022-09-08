import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./login.scss";

const mapDispatchToProps = (dispatch) => {
  return {
    setAppTitle: (payload) =>
      dispatch({ type: "SET_APPTITLE", appTitle: payload }),
  };
};

export default connect(null, mapDispatchToProps)(Login);

function Login(props) {
  const navigate = useNavigate();

  const userLogin = () => {
    navigate("/login");
  };

  const userRegist = () => {
    navigate("/regist");
  };

  useEffect(() => {
    props.setAppTitle("Todo and Done List");
  }, []);

  return (
    <>
      <div className="login-components">
        <form>
          <div className="login-id">
            <label htmlFor="id">아이디</label>
            <input type="text" id="id" placeholder="아이디"></input>
          </div>
          <div className="login-password">
            <label htmlFor="password">비밀번호</label>
            <input type="password" id="password" placeholder="비밀번호"></input>
          </div>
        </form>
        <div className="buttons">
          <button className="button-green" onClick={userLogin}>
            로그인
          </button>
          <button className="button-black" onClick={userRegist}>
            회원가입
          </button>
        </div>
      </div>
    </>
  );
}
