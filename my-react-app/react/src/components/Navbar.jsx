import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link className="nav-btn" to="/">Home</Link>
      <Link className="nav-btn" to="/about">About</Link>
      <Link className="nav-btn" to="/contact">Contact</Link>
    </nav>
  );
}
