import "./Home.css";
import CycleText from "../CycleText/CycleText";
import headshot from "../../assets/Ryan-Profile.jpg";

function Home() {
  return (
    <main className="home app__section">
      <div className="home__text">
        <h2 className="home__intro">My Name is:</h2>
        <p className="home__name">Ryan Bommarito</p>
        {/* <h2 className="home__name">
          <span className="home__intro">My name is: </span>Ryan
        </h2> */}
        <CycleText />
        <button className="home__contact-button">Hire Me!</button>
      </div>
      <img src={headshot} alt="Ryan Bommarito" className="home__image" />
    </main>
  );
}

export default Home;
