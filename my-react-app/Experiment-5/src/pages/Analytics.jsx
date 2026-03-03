import { useSelector } from "react-redux";
import { useMemo } from "react";
import "./Analytics.css";

const Analytics = () => {
  const { tasks } = useSelector(state => state.tasks);

  const analyticsData = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const pending = total - completed;

    const productivityScore =
      total === 0 ? 0 : ((completed / total) * 100).toFixed(2);

    return { total, completed, pending, productivityScore };
  }, [tasks]);

  return (
    <div className="analytics">
      <h2>Analytics Overview</h2>

      <div className="analytics-grid">
        <div className="analytics-card">
          <h3>Total Tasks</h3>
          <p>{analyticsData.total}</p>
        </div>

        <div className="analytics-card">
          <h3>Completed</h3>
          <p>{analyticsData.completed}</p>
        </div>

        <div className="analytics-card">
          <h3>Pending</h3>
          <p>{analyticsData.pending}</p>
        </div>

        <div className="analytics-card">
          <h3>Productivity Score</h3>
          <p>{analyticsData.productivityScore}%</p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;