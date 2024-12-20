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
import SeoImprove from "./Pages/SeoImprove";
import SocialMedia from "./Pages/SocialMedia";
import Photos_Projects from "./Pages/Photos_Projects";
import RegisterNow from "./Pages/RegisterNow";
import Printing from "./Pages/Printing";
import Perfumes from "./Pages/Perfumes";
import Clothes from "./Pages/Clothes";
import Cafes from "./Pages/Cafes";
import Resturants from "./Pages/Resturants";
import Events from "./Pages/Events";
import Theatres from "./Pages/Theatres";
import MakeUp from "./Pages/MakeUp";

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
        <Route path="photos_projects" element={<Photos_Projects />} />
        <Route path="services" element={<Services />} />
        <Route path="employment" element={<Employment />} />
        <Route path="industry" element={<Industry />} />
        <Route path="seo" element={<SeoImprove />} />
        <Route path="social_media" element={<SocialMedia />} />
        <Route path="spatial_identity" element={<Spatial_Identity />} />
        <Route path="websites_projects" element={<Websites_Projects />} />
        <Route path="brands_projects" element={<Brands_Projects />} />
        <Route path="markting" element={<Markting />} />
        <Route path="printing" element={<Printing />} />
        <Route path="perfumes" element={<Perfumes />} />
        <Route path="clothes" element={<Clothes />} />
        <Route path="cafes" element={<Cafes />} />
        <Route path="resturant" element={<Resturants />} />
        <Route path="events" element={<Events />} />
        <Route path="theatres" element={<Theatres />} />
        <Route path="make-up" element={<MakeUp />} />
        <Route path="register_now" element={<RegisterNow />} />
        <Route path="single_service/:id" element={<Single_Service />} />
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
