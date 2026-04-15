import React from "react";
import { getRole, logout } from "../utils/auth";

function Navbar() {
  const role = getRole();

  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <span className="navbar-brand">RBAC System</span>

      <div>
        {role === "ADMIN" && (
          <button className="btn btn-warning me-2">Admin Panel</button>
        )}

        <button className="btn btn-outline-light" onClick={logout}>
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;