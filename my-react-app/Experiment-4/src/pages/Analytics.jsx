import { useContext, useMemo, useState } from "react";
import { AppContext } from "../context/AppContext";

function Analytics() {
  const { state, dispatch } = useContext(AppContext);
  const [taskTitle, setTaskTitle] = useState("");

  const completedCount = useMemo(() => {
    return state.tasks.filter(task => task.completed).length;
  }, [state.tasks]);

  const addTask = () => {
    if (taskTitle.trim() === "") return;

    dispatch({
      type: "ADD_TASK",
      payload: {
        id: Date.now(),
        title: taskTitle,
        completed: false
      }
    });

    setTaskTitle("");
  };

  return (
    <div className="main-container">
      <div className="glass-card">
        <h2>Analytics Dashboard</h2>

        <p>Total Tasks: {state.tasks.length}</p>
        <p>Completed Tasks: {completedCount}</p>

        <hr />

        {/* Add Task */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "20px"
          }}
        >
          <input
            type="text"
            placeholder="Enter new task"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            className="form-control"
          />
          <button className="btn btn-primary" onClick={addTask}>
            Add
          </button>
        </div>

        {/* Task List */}
        {state.tasks.length === 0 ? (
          <p>No tasks added yet.</p>
        ) : (
          <ul className="list-group">
            {state.tasks.map(task => (
              <li
                key={task.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <span
                  style={{
                    textDecoration: task.completed ? "line-through" : "none",
                    cursor: "pointer"
                  }}
                  onClick={() =>
                    dispatch({ type: "TOGGLE_TASK", payload: task.id })
                  }
                >
                  {task.title}
                </span>

                <button
                  className="btn btn-sm btn-danger"
                  onClick={() =>
                    dispatch({ type: "DELETE_TASK", payload: task.id })
                  }
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Analytics;