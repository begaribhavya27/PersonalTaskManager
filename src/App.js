import { RiTodoLine } from "react-icons/ri";
import { ListFormat } from "typescript";
import "./styles.css";

export default function App() {
  return (
    <div className="bg">
      <div className="navbar">
        <RiTodoLine className="icon" />
        <h1 className="title">PERSONAL TASK MANAGER</h1>
      </div>
      <div className="tasks-container">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}
