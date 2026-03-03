import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Sidebar = () => {
  const { compactMode, toggleCompactMode } = useContext(AppContext);

  return (
    <aside className={`sidebar ${compactMode ? "compact" : ""}`}>
      <button onClick={toggleCompactMode}>
        {compactMode ? "Expand Layout" : "Toggle Layout"}
      </button>

      {!compactMode && <p>Dashboard Menu</p>}
    </aside>
  );
};

export default Sidebar;