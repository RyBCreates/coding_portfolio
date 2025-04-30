import "./Header.css";
import "../App/App.css";
import Navbar from "../Navbar/Navbar";

function Header() {
  return (
    <header className="header page__section">
      <h1 className="header__title">RyBCreates</h1>
      <Navbar />
    </header>
  );
}

export default Header;
