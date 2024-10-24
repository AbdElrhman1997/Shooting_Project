import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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
import Websites_Projects from "./Pages/Websites_Projects";
import Brands_Projects from "./Pages/Brands_Projects";
import Markting from "./Pages/Markting";
import Services from "./Pages/Services";
import Industry from "./Pages/Industry";
import Employment from "./Pages/Employment";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppRoutes = () => {
  return (
    <Routes>
      {/* Redirect to /ar by default if no language is present */}
      <Route path="/" element={<Navigate replace to="/ar/home" />} />

      {/* Language-specific routes */}
      <Route path="/:lang" element={<App />}>
        <Route path="home" element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="blogs/:id" element={<Single_Blog />} />
        <Route path="about_us" element={<AboutUs />} />
        <Route path="our_clients" element={<OurClients />} />
        <Route path="our_projects" element={<OurProjects />} />
        <Route path="services" element={<Services />} />
        <Route path="employment" element={<Employment />} />
        <Route path="industry" element={<Industry />} />
        <Route path="spatial_identity" element={<Spatial_Identity />} />
        <Route path="websites_projects" element={<Websites_Projects />} />
        <Route path="brands_projects" element={<Brands_Projects />} />
        <Route path="markting" element={<Markting />} />
        <Route path="services/:id" element={<Single_Service />} />
      </Route>

      {/* If unsupported language is used, redirect to /ar */}
      <Route path="*" element={<Navigate to="/ar" replace />} />
    </Routes>
  );
};

root.render(
  <Router>
    <AppRoutes />
  </Router>
);
