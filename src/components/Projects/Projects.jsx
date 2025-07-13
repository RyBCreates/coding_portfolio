import "./Projects.css";
import EcoLink from "../../assets/Project-Screenshots/EcoLink-main.png";
import Itinerarium from "../../assets/Project-Screenshots/Itinerarium-home.png";
import FoodFinder from "../../assets/Project-Screenshots/Food-finder-home.png";
import Spots from "../../assets/Project-Screenshots/Spots-home.png";
import JournalApp from "../../assets/Project-Screenshots/Journal-App-home.png";
import WTWR from "../../assets/Project-Screenshots/WTWR-profile.png";

function Projects() {
  return (
    <section className="projects app__section">
      <h2 className="projects__title">Recent Projects</h2>
      <ul className="projects__gallery">
        <li className="projects__card">
          <a
            href="https://www.wtwr.medialoverz.com"
            target="_blank"
            rel="noopener noreferrer"
            className="projects__card-link"
          >
            <div className="projects__image-wrapper">
              <img
                className="projects__card-image"
                alt="Food Finder"
                src={FoodFinder}
              ></img>
            </div>
            <div className="projects__card-info">
              <h3 className="projects__card-title">
                Food Finder (Coming Soon)
              </h3>
              <p className="projects__card-description">
                Find Recipes and add Ingredients to a shopping list, in future
                iterations, users will be able to order the ingredients straight
                to their doorstep.
              </p>
            </div>
          </a>
        </li>
        <li className="projects__card">
          <a
            href="https://www.wtwr.medialoverz.com"
            target="_blank"
            rel="noopener noreferrer"
            className="projects__card-link"
          >
            <div className="projects__image-wrapper">
              <img
                className="projects__card-image"
                alt="Itinerarium"
                src={Itinerarium}
              ></img>
            </div>
            <div className="projects__card-info">
              <h3 className="projects__card-title">
                Itinerarium (Coming Soon)
              </h3>
              <p className="projects__card-description">
                An app that allows users to collaborate with other users to
                create dynamic trip itineraries.
              </p>
            </div>
          </a>
        </li>
        <li className="projects__card">
          <a
            href="https://www.wtwr.medialoverz.com"
            target="_blank"
            rel="noopener noreferrer"
            className="projects__card-link"
          >
            <div className="projects__image-wrapper">
              <img
                className="projects__card-image"
                alt="EcoLink"
                src={EcoLink}
              ></img>
            </div>
            <div className="projects__card-info">
              <h3 className="projects__card-title">EcoLink</h3>
              <p className="projects__card-description">
                A community-driven platform that connects users with
                eco-friendly businesses and initiatives. Features include user
                submissions, map integration, and sustainability tagging.
              </p>
            </div>
          </a>
        </li>
        <li className="projects__card">
          <a
            href="https://www.wtwr.medialoverz.com"
            target="_blank"
            rel="noopener noreferrer"
            className="projects__card-link"
          >
            <div className="projects__image-wrapper">
              <img
                className="projects__card-image"
                alt="Spots"
                src={Spots}
              ></img>
            </div>
            <div className="projects__card-info">
              <h3 className="projects__card-title">Spots</h3>
              <p className="projects__card-description">
                A social media-style app where users can create posts with
                images and captions, like posts, and delete their own. Fully
                responsive and styled for mobile-first usability.
              </p>
            </div>
          </a>
        </li>
        <li className="projects__card">
          <a
            href="https://www.wtwr.medialoverz.com"
            target="_blank"
            rel="noopener noreferrer"
            className="projects__card-link"
          >
            <div className="projects__image-wrapper">
              <img
                className="projects__card-image"
                alt="What To Wear App"
                src={WTWR}
              ></img>
            </div>
            <div className="projects__card-info">
              <h3 className="projects__card-title">WTWR</h3>
              <p className="projects__card-description">
                A weather-based clothing recommendation app built in React. It
                uses a weather API to suggest clothing based on current
                temperature conditions, promoting smart and comfortable
                dressing.
              </p>
            </div>
          </a>
        </li>
        <li className="projects__card">
          <a
            href="https://www.wtwr.medialoverz.com"
            target="_blank"
            rel="noopener noreferrer"
            className="projects__card-link"
          >
            <div className="projects__image-wrapper">
              <img
                className="projects__card-image"
                alt="My Growth Journal"
                src={JournalApp}
              ></img>
            </div>
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
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Projects;
