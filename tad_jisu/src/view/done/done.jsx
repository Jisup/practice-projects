import { useEffect, useState } from "react";

import "./done.scss";
import DoneList from "./components/done-list.jsx";

export default function Done() {
  return (
    <div className="done-component">
      <title>Done List</title>
      <div className="title">This is done list</div>
      <DoneList />
    </div>
  );
}
