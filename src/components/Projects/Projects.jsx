import "./Projects.css";
import EcoLink from "../../assets/Project-Screenshots/EcoLink-main.png";
import Itinerarium from "../../assets/Project-Screenshots/Itinerarium-home.png";
import FoodFinder from "../../assets/Project-Screenshots/Food-finder-home.png";
import Spots from "../../assets/Project-Screenshots/Spots-home.png";
import JournalApp from "../../assets/Project-Screenshots/Journal-App-home.png";
import WTWR from "../../assets/Project-Screenshots/WTWR-profile.png";

const GradientFallback = () => <div className="projects__fallback-image"></div>;

function Projects() {
  return (
    <section className="projects app__section">
      <h2 className="projects__title">Recent Projects</h2>
      <ul className="projects__gallery">
        {/* Itinerarium */}
        <li className="projects__card">
          <a
            href="https://rybcreates.github.io/june_code_jam/?#/"
            target="_blank"
            rel="noopener noreferrer"
            className="projects__card-link"
          >
            <div className="projects__image-wrapper">
              <img
                className="projects__card-image"
                alt="Itinerarium"
                src={Itinerarium}
              />
            </div>
            <div className="projects__card-info">
              <h3 className="projects__card-title">
                Itinerarium (In Development)
              </h3>
              <p className="projects__card-description">
                A collaborative travel planner that lets users create and share
                interactive trip itineraries in real time. Designed for group
                travel, with editable schedules and event-based timelines.
              </p>
            </div>
          </a>
        </li>

        {/* Food Finder */}
        <li className="projects__card projects__card--disabled">
          <div className="projects__image-wrapper">
            <img
              className="projects__card-image"
              alt="Food Finder"
              src={FoodFinder}
            />
          </div>
          <div className="projects__card-info">
            <h3 className="projects__card-title">
              Food Finder (In Development)
            </h3>
            <p className="projects__card-description">
              A recipe discovery app where users can search meals and add
              ingredients to a shopping list. Future releases will integrate
              online grocery delivery for a seamless meal-planning experience.
            </p>
          </div>
        </li>

        {/* EcoLink */}
        <li className="projects__card">
          <a
            href="https://eduenez33.github.io/March-Code-jam/#ecosquad"
            target="_blank"
            rel="noopener noreferrer"
            className="projects__card-link"
          >
            <div className="projects__image-wrapper">
              <img
                className="projects__card-image"
                alt="EcoLink"
                src={EcoLink}
              />
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

        {/* OC Wildlands */}
        <li className="projects__card">
          <div className="projects__image-wrapper">
            <GradientFallback />
          </div>
          <div className="projects__card-info">
            <h3 className="projects__card-title">OC Wildlands</h3>
            <p className="projects__card-description">
              Externship project for a wildfire prevention nonprofit. Built with
              TypeScript, React, and KeystoneJS connected to a PostgreSQL
              database. Used Docker for development and deployment consistency.
            </p>
          </div>
        </li>

        {/* Decluttr */}
        <li className="projects__card">
          <div className="projects__image-wrapper">
            <GradientFallback />
          </div>
          <div className="projects__card-info">
            <h3 className="projects__card-title">Decluttr</h3>
            <p className="projects__card-description">
              A gamified cleaning app where users level up by completing tasks
              and earning gems. Built with the MERN stack and designed with
              gamification-driven UX principles.
            </p>
          </div>
        </li>

        {/* E-Commerce Store */}
        <li className="projects__card">
          <div className="projects__image-wrapper">
            <GradientFallback />
          </div>
          <div className="projects__card-info">
            <h3 className="projects__card-title">E-Commerce Store</h3>
            <p className="projects__card-description">
              Fullstack online store built with the MERN stack and integrated
              Stripe API for real-time payment handling and order validation.
              Includes an admin dashboard for managing products and orders.
            </p>
          </div>
        </li>

        {/* Spots */}
        <li className="projects__card projects__card--disabled">
          <div className="projects__image-wrapper">
            <img className="projects__card-image" alt="Spots" src={Spots} />
          </div>
          <div className="projects__card-info">
            <h3 className="projects__card-title">Spots</h3>
            <p className="projects__card-description">
              A lightweight social app for sharing location-based content. Users
              can create, like, and delete posts with images and captions.
              Designed mobile-first with a simple, clean UI.
            </p>
          </div>
        </li>

        {/* WTWR */}
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
              />
            </div>
            <div className="projects__card-info">
              <h3 className="projects__card-title">WTWR</h3>
              <p className="projects__card-description">
                A weather-based clothing recommendation app that pulls live
                weather data and recommends outfits tailored to the current
                conditions. Built with React and styled-components.
              </p>
            </div>
          </a>
        </li>

        {/* Journal App */}
        <li className="projects__card projects__card--disabled">
          <div className="projects__image-wrapper">
            <img
              className="projects__card-image"
              alt="My Growth Journal"
              src={JournalApp}
            />
          </div>
          <div className="projects__card-info">
            <h3 className="projects__card-title">
              My Growth Journal (In Development)
            </h3>
            <p className="projects__card-description">
              A digital journaling tool with guided prompts for reflection and
              self-growth. Entries are saved locally for privacy. Designed for
              focus, mindfulness, and a clutter-free writing experience.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Projects;
