import { useEffect, useState } from "react";

import "./done-list.scss";

export default function DoneList({ doneList }) {
  useEffect(() => {
    // console.log(doneList);
  }, [doneList]);

  return (
    <div className="donelist-component">
      {doneList.map((done, index) => {
        return (
          <div className="done" data-done-id={done.doneId} key={index}>
            <div className="done-title">{done.title}</div>
          </div>
        );
      })}
    </div>
  );
}
