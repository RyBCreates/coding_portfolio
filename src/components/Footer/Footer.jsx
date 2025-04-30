import "./Footer.css";
import linkedIn from "../../assets/linkedin.svg";
import github from "../../assets/gitHub-logo.png";
import instagram from "../../assets/instagram-new.png";

function Footer() {
  return (
    <footer className="footer app__section">
      <div className="footer__content">
        <ul className="footer__list footer__list_type_socials">
          <li className="footer__list-item">
            <a href="#" className="footer__social-link">
              <img
                src={linkedIn}
                alt="LinkedIn"
                className="footer__social-icon"
              />
              LinkedIn
            </a>
          </li>
          <li className="footer__list-item">
            <a href="#" className="footer__social-link">
              <img src={github} alt="Github" className="footer__social-icon" />
              Github
            </a>
          </li>
          <li className="footer__list-item">
            <a href="#" className="footer__social-link">
              <img
                src={instagram}
                alt="Instagram"
                className="footer__social-icon"
              />
              Instagram
            </a>
          </li>
        </ul>
        <ul className="footer__list footer__list_type_navbar">
          <li className="footer__navbar-link">
            <a className="footer__navbar-link_type_home">Home</a>
          </li>
          <li className="footer__navbar-link">
            <a className="footer__navbar-link_type_about">About</a>
          </li>
          <li className="footer__navbar-link">
            <a className="footer__navbar-link_type_skills">Skills</a>
          </li>
          <li className="footer__navbar-link">
            <a className="footer__navbar-link_type_works">Works</a>
          </li>
          <li className="footer__navbar-link">
            <a className="footer__navbar-link_type_contact">Contact</a>
          </li>
        </ul>
      </div>

      <p className="footer__copyright">Ryan Bommarito - 2025</p>
    </footer>
  );
}

export default Footer;
