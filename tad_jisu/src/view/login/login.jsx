import { useNavigate } from "react-router-dom";
import "./login.scss";

export default function Login() {
  const navigate = useNavigate();
  const userLogin = () => {
    navigate("/login");
  };

  const userRegist = () => {
    navigate("/regist");
  };

  return (
    <>
      <div className="login-components">
        <form>
          <div className="login-id">
            <label for="id">아이디</label>
            <input type="text" id="id" placeholder="아이디"></input>
          </div>
          <div className="login-password">
            <label for="password">비밀번호</label>
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
