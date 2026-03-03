import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // 🔥 Load saved theme from localStorage
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  const [compactMode, setCompactMode] = useState(false);

  // 🔥 Save theme whenever it changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const toggleCompactMode = () => {
    setCompactMode((prev) => !prev);
  };

  return (
    <AppContext.Provider
      value={{ theme, toggleTheme, compactMode, toggleCompactMode }}
    >
      <div className={`app-theme ${theme}`}>
        {children}
      </div>
    </AppContext.Provider>
  );
};