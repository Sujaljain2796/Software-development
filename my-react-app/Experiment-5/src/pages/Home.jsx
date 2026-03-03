import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to ProTrack Dashboard</h1>
      <p>
        A smart productivity and analytics system built with Redux Toolkit,
        Context API, React Router and performance optimization using useMemo.
      </p>

      <div className="home-cards">
        <div className="home-card">
          <h3>Task Management</h3>
          <p>Manage and track daily productivity efficiently.</p>
        </div>

        <div className="home-card">
          <h3>Analytics Insights</h3>
          <p>Monitor completion trends and performance metrics.</p>
        </div>

        <div className="home-card">
          <h3>Advanced Reports</h3>
          <p>Real-time computed summaries with optimized rendering.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;