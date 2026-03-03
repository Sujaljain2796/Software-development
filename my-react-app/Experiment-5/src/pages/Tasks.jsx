import { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../redux/slices/taskSlice";
import TaskCard from "../components/TaskCard";
import FilterBar from "../components/FilterBar";
import "./Tasks.css";

const Tasks = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const { tasks, filter } = useSelector((state) => state.tasks);

  const filteredTasks = useMemo(() => {
    if (filter === "completed") return tasks.filter((t) => t.completed);
    if (filter === "pending") return tasks.filter((t) => !t.completed);
    return tasks;
  }, [tasks, filter]);

  const handleAdd = () => {
    if (input.trim() === "") return;
    dispatch(addTask(input));
    setInput("");
  };

  return (
    <div className="tasks-page">
      <h1>Task Manager</h1>

      <div className="task-input-section">
        <input
          type="text"
          placeholder="Enter a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAdd}>Add Task</button>
      </div>

      <FilterBar />

      <div className="tasks-grid">
        {filteredTasks.length === 0 ? (
          <p className="empty">No tasks available</p>
        ) : (
          filteredTasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))
        )}
      </div>
    </div>
  );
};

export default Tasks;