import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__links">
        <li className="navbar__link">
          <a className="navbar__link-home">Home</a>
        </li>
        <li className="navbar__link">
          <a className="navbar__link-about">About</a>
        </li>
        <li className="navbar__link">
          <a className="navbar__link-skills">Skills</a>
        </li>
        <li className="navbar__link">
          <a className="navbar__link-works">Works</a>
        </li>
        <li className="navbar__link">
          <a className="navbar__link-contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
