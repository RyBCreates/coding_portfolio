import "./Projects.css";
import EcoLink from "../../assets/Project-Screenshots/EcoLink-main.png";
import Itinerarium from "../../assets/Project-Screenshots/Itinerarium-home.png";

function Projects() {
  return (
    <section className="projects app__section">
      <h2 className="projects__title">Recent Projects</h2>
      <ul className="projects__gallery">
        {" "}
        <li className="projects__card">
          <img
            className="projects__card-image"
            alt="Itinerarium"
            src={Itinerarium}
          ></img>
          <div className="projects__card-info">
            <h3 className="projects__card-title">Itinerarium (Coming Soon)</h3>
            <p className="projects__card-description">
              An app that allows users to collaborate with other users to create
              dynamic trip itineraries.
            </p>
          </div>
        </li>
        <li className="projects__card">
          <img
            className="projects__card-image"
            alt="EcoLink"
            src={EcoLink}
          ></img>
          <div className="projects__card-info">
            <h3 className="projects__card-title">EcoLink</h3>
            <p className="projects__card-description">
              A community-driven platform that connects users with eco-friendly
              businesses and initiatives. Features include user submissions, map
              integration, and sustainability tagging.
            </p>
          </div>
        </li>
        <li className="projects__card">
          <img className="projects__card-image" alt="Spots" src="x"></img>{" "}
          <div className="projects__card-info">
            <h3 className="projects__card-title">Spots</h3>
            <p className="projects__card-description">
              A social media-style app where users can create posts with images
              and captions, like posts, and delete their own. Fully responsive
              and styled for mobile-first usability.
            </p>
          </div>
        </li>
        <li className="projects__card">
          <img
            className="projects__card-image"
            alt="What To Wear App"
            src="x"
          ></img>
          <div className="projects__card-info">
            <h3 className="projects__card-title">WTWR</h3>
            <p className="projects__card-description">
              A weather-based clothing recommendation app built in React. It
              uses a weather API to suggest clothing based on current
              temperature conditions, promoting smart and comfortable dressing.
            </p>
          </div>
        </li>
        <li className="projects__card">
          <img
            className="projects__card-image"
            alt="My Growth Journal"
            src={EcoLink}
          ></img>
          <div className="projects__card-info">
            <h3 className="projects__card-title">
              My Growth Journal (Coming Soon)
            </h3>
            <p className="projects__card-description">
              A journaling app that presents prompts and allows users to write
              and save entries locally. Built for personal growth and
              self-reflection, with a minimal and focused interface.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Projects;
