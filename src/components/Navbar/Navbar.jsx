import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul class="header__navbar-links">
        <li class="header__navbar-link">
          <a class="header__navbar-link_type_home">Home</a>
        </li>
        <li class="header__navbar-link">
          <a class="header__navbar-link_type_about">About</a>
        </li>
        <li class="header__navbar-link">
          <a class="header__navbar-link_type_skills">Skills</a>
        </li>
        <li class="header__navbar-link">
          <a class="header__navbar-link_type_works">Works</a>
        </li>
        <li class="header__navbar-link">
          <a class="header__navbar-link_type_contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
