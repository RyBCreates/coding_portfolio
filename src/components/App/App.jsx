import { HashRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
import "./App.css";
import Header from "../Header/Header";
// import Home from "./pages/Home";
// import Projects from "./pages/Projects";
// import About from "./pages/About";
// import Contact from "./pages/Contact";

function App() {
  return (
    <HashRouter>
      <div className="app">
        <div className="app__content">
          <Header />
          <Routes>
            {/* <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
          {/* <Footer /> */}
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
