import { useDispatch } from "react-redux";
import { toggleTask, deleteTask } from "../redux/slices/taskSlice";
import "./TaskCard.css";

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div className={`task-card ${task.completed ? "completed" : ""}`}>
      <div className="task-info">
        <h3>{task.title}</h3>
        <p>{task.completed ? "Completed" : "Pending"}</p>
      </div>

      <div className="task-actions">
        <button
          className="toggle-btn"
          onClick={() => dispatch(toggleTask(task.id))}
        >
          ✓
        </button>

        <button
          className="delete-btn"
          onClick={() => dispatch(deleteTask(task.id))}
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default TaskCard;