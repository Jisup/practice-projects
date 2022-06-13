import { useEffect, useState } from "react";
import { connect } from "react-redux";

import "./done-list.scss";
import doneReducer from "reducer/combine/doneReducer";

const mapStateToProps = ({ doneReducer }) => {
  return {
    doneList: doneReducer.doneList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DoneList);

function DoneList({ doneList }) {
  return (
    <div className="donelist-component">
      {doneList.map((done, index) => {
        console.log(done, done.todoId, done.tite);
        return (
          <div className="done" data-done-id={done.todoId} key={index}>
            <div className="done-title">{done.title}</div>
          </div>
        );
      })}
    </div>
  );
}
