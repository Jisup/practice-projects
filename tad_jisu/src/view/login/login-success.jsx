import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./login-success.scss";

const mapDispatchToProps = (dispatch) => {
  return {
    setAppTitle: (payload) =>
      dispatch({ type: "SET_APPTITLE", appTitle: payload }),
  };
};

export default connect(null, mapDispatchToProps)(LoginSuccess);

function LoginSuccess(props) {
  useEffect(() => {
    props.setAppTitle("오늘은 어떤 당근을 캐볼까요!");
  }, []);

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
