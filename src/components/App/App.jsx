import { HashRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Projects from "../Projects/Projects";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

function App() {
  return (
    <HashRouter>
      <div className="app">
        <div className="app__content">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
