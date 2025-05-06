import "./Skills.css";

function Skills() {
  return (
    <div className="skills">
      <h2 className="skills__title">Skills</h2>
      <ul className="skills__list">
        <li className="skills__list-section">
          <div className="skills__list-title_container">
            <p className="skills__list-emoji">🧠</p>
            <h3 className="skills__list-title">Languages & Technologies</h3>
          </div>
          <ul className="skills__sublist">
            <li className="skills__sublist_item">
              <p className="skills__sublist_text">HTML5 / CSS3</p>
            </li>
            <li className="skills__sublist_item">
              <p className="skills__sublist_text">JavaScript (ES6+)</p>
            </li>
            <li className="skills__sublist_item">
              <p className="skills__sublist_text">React.js</p>
            </li>
            <li className="skills__sublist_item">
              <p className="skills__sublist_text">Node.js</p>
            </li>
            <li className="skills__sublist_item">
              <p className="skills__sublist_text">Express.js</p>
            </li>
            <li className="skills__sublist_item">
              <p className="skills__sublist_text">MongoDB</p>
            </li>
          </ul>
        </li>
        <li className="skills__list-section">
          <div className="skills__list-title_container">
            <p className="skills__list-emoji">🛠</p>
            <h3 className="skills__list-title">Tools & Workflow</h3>
          </div>
          <ul className="skills__sublist">
            <li className="skills__sublist_item">
              <p className="skills__sublist_text">Git & GitHub</p>
            </li>
            <li className="skills__sublist_item">
              <p className="skills__sublist_text">Postman</p>
            </li>
            <li className="skills__sublist_item">
              <p className="skills__sublist_text">npm</p>
            </li>
            <li className="skills__sublist_item">
              <p className="skills__sublist_text">Vite</p>
            </li>
            <li className="skills__sublist_item">
              <p className="skills__sublist_text">VS Code</p>
            </li>
          </ul>
        </li>
        <li className="skills__list-section">
          <div className="skills__list-title_container">
            <p className="skills__list-emoji">💻</p>
            <h3 className="skills__list-title">Front-End Development</h3>
          </div>
          <ul className="skills__sublist">
            <li className="skills__sublist_item">
              <p className="skills__sublist_text">Responsive Design</p>
            </li>
            <li className="skills__sublist_item">
              <p className="skills__sublist_text">
                Component-based Architecture
              </p>
            </li>
            <li className="skills__sublist_item">
              <p className="skills__sublist_text">React Hooks</p>
            </li>
            <li className="skills__sublist_item">
              <p className="skills__sublist_text">Conditional Rendering</p>
            </li>
            <li className="skills__sublist_item">
              <p className="skills__sublist_text">Form Handling</p>
            </li>
          </ul>
        </li>
        <li className="skills__list-section">
          <div className="skills__list-title_container">
            <p className="skills__list-emoji">🔧</p>
            <h3 className="skills__list-title">Back-End Development</h3>
          </div>
          <ul className="skills__sublist">
            <li className="skills__sublist_item">
              <p className="skills__sublist_text">RESTful APIs</p>
            </li>
            <li className="skills__sublist_item">
              <p className="skills__sublist_text">MongoDB Schemas</p>
            </li>
            <li className="skills__sublist_item">
              <p className="skills__sublist_text">Express Middleware</p>
            </li>
            <li className="skills__sublist_item">
              <p className="skills__sublist_text">CRUD Operations</p>
            </li>
          </ul>
        </li>
        <li className="skills__list-section">
          <div className="skills__list-title_container">
            <p className="skills__list-emoji">🌐</p>
            <h3 className="skills__list-title">Other Skills</h3>
          </div>
          <ul className="skills__sublist">
            <li className="skills__sublist_item">
              <p className="skills__sublist_text">
                Debugging & Troubleshooting
              </p>
            </li>
            <li className="skills__sublist_item">
              <p className="skills__sublist_text">Clean Code Practices</p>
            </li>
            <li className="skills__sublist_item">
              <p className="skills__sublist_text">Problem Solving</p>
            </li>
            <li className="skills__sublist_item">
              <p className="skills__sublist_text">Team Collaboration</p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Skills;
