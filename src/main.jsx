// src/main.jsx
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import App from "./App";
import "./index.css";
import "../i18n";

// import Home from "./Home";
// import About from "./About";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
      </Route>
    </Routes>
  </Router>
);
