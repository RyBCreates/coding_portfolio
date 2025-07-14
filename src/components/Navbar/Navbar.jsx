import { useState } from "react";
import { NavLink } from "react-router-dom";
import HamburgerIcon from "../../assets/hamburger-menu.svg";
import "./Navbar.css";
import React from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen(!menuOpen);
  const handleClose = () => setMenuOpen(false);
  return (
    <nav className="navbar">
      <button
        className={`navbar__hamburger ${menuOpen ? "open" : ""}`}
        onClick={handleToggle}
      >
        <img className="navbar__hamburger-icon" src={HamburgerIcon}></img>
      </button>

      <ul className={`navbar__links ${menuOpen ? "active" : ""}`}>
        <li>
          <NavLink to="/" className="navbar__link" onClick={handleClose}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="navbar__link" onClick={handleClose}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/skills" className="navbar__link" onClick={handleClose}>
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className="navbar__link"
            onClick={handleClose}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="navbar__link" onClick={handleClose}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
