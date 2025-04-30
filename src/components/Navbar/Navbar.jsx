import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__links">
        <li className="navbar__link">
          <Link to="/" className="navbar__link-home">
            Home
          </Link>
        </li>
        <li className="navbar__link">
          <Link to="/about" className="navbar__link-about">
            About
          </Link>
        </li>
        <li className="navbar__link">
          <Link to="/skills" className="navbar__link-skills">
            Skills
          </Link>
        </li>
        <li className="navbar__link">
          <Link to="/projects" className="navbar__link-projects">
            Projects
          </Link>
        </li>
        <li className="navbar__link">
          <Link to="/contact" className="navbar__link-contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
