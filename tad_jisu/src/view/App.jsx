import { Link } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <title>Todo and Done List</title>
      <div className="title">Todo and Done List</div>
      <Link to="/todo">
        <button>Todo</button>
      </Link>
      <Link to="/done">
        <button>Done</button>
      </Link>
    </div>
  );
}
