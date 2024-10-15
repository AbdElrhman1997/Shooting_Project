// src/main.jsx
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import App from "./App";
import "./index.css";
import "../i18n";
import Blogs from "./Pages/Blogs";
import Single_Blog from "./Pages/Single_Blog";
import AboutUs from "./Pages/AboutUs";
import Single_Service from "./Pages/Single_Service";
import OurClients from "./Pages/OurClients";
import OurProjects from "./Pages/OurProjects";
import Spatial_Identity from "./Pages/Spatial_Identity";
import Websites_Work from "./Pages/Websites_Work";

// import Home from "./Home";
// import About from "./About";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="blogs/:id" element={<Single_Blog />} />
        <Route path="about_us" element={<AboutUs />} />
        <Route path="our_clients" element={<OurClients />} />
        <Route path="our_projects" element={<OurProjects />} />
        <Route path="spatial_identity" element={<Spatial_Identity />} />
        <Route path="websites_work" element={<Websites_Work />} />
        <Route path="services/:id" element={<Single_Service />} />
      </Route>
    </Routes>
  </Router>
);
