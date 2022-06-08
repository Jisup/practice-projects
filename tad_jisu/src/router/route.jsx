import App from "../view/App.jsx";
import Todo from "../view/todo/todo.jsx";
import Done from "../view/done/done.jsx";

import { Routes, Route } from "react-router-dom";

export default function route() {
  return (
    <Routes>
      <Route path="/" element={<App />} />

      <Route path="/todo" element={<Todo />} />

      <Route path="/done" element={<Done />} />
    </Routes>
  );
}
