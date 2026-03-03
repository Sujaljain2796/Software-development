import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(AppContext);

  return (
    <div className="theme-toggle" onClick={toggleTheme}>
      <div className={`toggle-switch ${theme}`}>
        <div className="switch-circle"></div>
      </div>
    </div>
  );
};

export default ThemeToggle;