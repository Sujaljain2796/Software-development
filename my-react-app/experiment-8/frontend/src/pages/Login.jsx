import React, { useState } from "react";
import axios from "axios";
import { setSession } from "../utils/auth";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

const login = async () => {
  try {
    const isAdmin = username.includes("admin");

    const url = isAdmin
      ? "http://localhost:8080/api/admin/dashboard"
      : "http://localhost:8080/api/user/profile";

    const res = await axios.get(url, {
      headers: {
        Authorization: "Basic " + btoa(username + ":" + password)
      }
    });

    if (res.status === 200) {
      const role = isAdmin ? "ADMIN" : "USER";

      sessionStorage.setItem("user", username);
      sessionStorage.setItem("role", role);

      window.location.href = role === "ADMIN" ? "/admin" : "/user";
    }
  } catch (err) {
    console.log(err); // 👈 IMPORTANT for debugging
    alert("Invalid credentials");
  }
};
  return (
    <div className="login-bg d-flex justify-content-center align-items-center">
      <div className="card p-4 shadow-lg login-card">
        <h2 className="text-center mb-3">RBAC Login</h2>

        <input className="form-control mb-3" placeholder="Username"
          onChange={(e)=>setUsername(e.target.value)} />

        <input className="form-control mb-3" type="password" placeholder="Password"
          onChange={(e)=>setPassword(e.target.value)} />

        <button className="btn btn-primary w-100" onClick={login}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;