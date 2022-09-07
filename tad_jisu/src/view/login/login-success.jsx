import { Link } from "react-router-dom";

import "./login-success.scss";

export default function LoginSuccess() {
  return (
    <div className="login-success-components">
      <Link to="/todo">
        <button className="main black">
          🐇
          <br />
          Todo
        </button>
      </Link>
      <Link to="/done">
        <button className="main black">
          🥕
          <br />
          Done
        </button>
      </Link>
    </div>
  );
}
