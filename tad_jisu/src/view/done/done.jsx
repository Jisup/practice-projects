import { useEffect, useState } from "react";

import "./done.scss";
import DoneList from "./components/done-list.jsx";
import { getLocalStorage } from "lib/localStorage";

export default function Done() {
  const [doneList, setDoneList] = useState(getLocalStorage("todolist"));

  useEffect(() => {
    console.log(doneList);
  }, [doneList]);

  return (
    <div className="done-component">
      <title>Done List</title>
      <div className="title">This is done list</div>
      <DoneList doneList={doneList} />
    </div>
  );
}
