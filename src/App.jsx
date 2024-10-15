// src/App.jsx
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import "./index.css";
import { Helmet } from "react-helmet";
import Footer from "./Components/Footer";

const App = () => {
  const hiddenHeaderFooterRoutes = ["/services", "/services/"];

  // Check if the current path is in the hidden routes array
  const isHiddenRoute = hiddenHeaderFooterRoutes.some((route) =>
    location.pathname.startsWith(route)
  );

  return (
    <main className="relative overflow-hidden">
      <Helmet></Helmet>
      {!isHiddenRoute && <Header />}
      <Outlet />
      {!isHiddenRoute && <Footer />}
    </main>
  );
};

export default App;
