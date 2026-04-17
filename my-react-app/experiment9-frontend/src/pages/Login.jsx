import { useState } from "react";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const token = btoa(username + ":" + password);
    localStorage.setItem("auth", token);

    // redirect based on role
    if (username === "admin1") {
      window.location.href = "/admin";
    } else {
      window.location.href = "/user";
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>🔐 Login</h2>
        <p className="subtitle">Access your dashboard</p>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>

        <p className="hint">
          Try: <b>user1 / user123</b> or <b>admin1 / admin123</b>
        </p>
      </div>
    </div>
  );
}

export default Login;