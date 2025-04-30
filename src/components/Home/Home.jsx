import "./Home.css";
import headshot from "../../assets/Ryan-Profile.jpg";

function Home() {
  return (
    <main className="home page__section">
      <div className="home__text">
        <h2 className="home__name">
          <span className="home__intro">My name is: </span>Ryan
        </h2>
        <p className="home__description">Web Developer</p>
        <button className="home__contact-button">Hire Me!</button>
      </div>
      <img src={headshot} alt="Ryan Bommarito" className="home__image" />
    </main>
  );
}

export default Home;
