import { useSelector } from "react-redux";
import { useMemo, useContext } from "react";
import { AppContext } from "../context/AppContext";
import "./Reports.css";

const Reports = () => {
  const { tasks } = useSelector((state) => state.tasks);
  const { theme, compactMode } = useContext(AppContext);

  // 🔥 Advanced Derived Calculations using useMemo
  const reportData = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter((task) => task.completed).length;
    const pending = total - completed;

    const completionRate =
      total === 0 ? 0 : ((completed / total) * 100).toFixed(1);

    const latestTask =
      tasks.length > 0
        ? tasks[tasks.length - 1].title
        : "No tasks available";

    return {
      total,
      completed,
      pending,
      completionRate,
      latestTask,
    };
  }, [tasks]);

  return (
    <div className={`reports ${theme}`}>
      <h2>Reports Dashboard</h2>

      <p className="report-subtitle">
        Overview of productivity insights and task performance metrics.
      </p>

      <div className={`report-grid ${compactMode ? "compact" : ""}`}>
        <div className="report-card">
          <h3>Total Tasks</h3>
          <p>{reportData.total}</p>
        </div>

        <div className="report-card">
          <h3>Completed</h3>
          <p>{reportData.completed}</p>
        </div>

        <div className="report-card">
          <h3>Pending</h3>
          <p>{reportData.pending}</p>
        </div>

        <div className="report-card">
          <h3>Completion Rate</h3>
          <p>{reportData.completionRate}%</p>
        </div>

        <div className="report-card wide">
          <h3>Latest Task Added</h3>
          <p>{reportData.latestTask}</p>
        </div>
      </div>
    </div>
  );
};

export default Reports;