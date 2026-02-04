import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
      <div className="container">
        <a className="navbar-brand fw-bold">Sujal Jain</a>
        <div>
          {["about", "skills", "projects", "contact"].map((sec) => (
            <Link
              key={sec}
              to={sec}
              smooth={true}
              duration={500}
              className="nav-link d-inline mx-2 text-light"
              style={{ cursor: "pointer" }}
            >
              {sec.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
