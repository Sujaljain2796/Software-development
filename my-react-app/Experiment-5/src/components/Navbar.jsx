import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>ProTrack</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/analytics">Analytics</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/reports">Reports</Link>
      </div>
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;