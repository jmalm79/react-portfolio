import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Header() {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg">
        <Link className="navbar-brand" to="/">
            Joshua M Alm
        </Link> 
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className={
                  window.location.pathname === "/" || window.location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/projects"
                className={window.location.pathname === "/projects" ? "nav-link active" : "nav-link"}>
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </nav>
  </div>
  );
}

export default Header;
