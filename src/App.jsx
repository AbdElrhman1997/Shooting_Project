import { Outlet, useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Helmet } from "react-helmet";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  const { lang } = useParams();
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    // If the URL language doesn't match i18n's current language, update it
    if (lang !== i18n.language) {
      i18n.changeLanguage(lang);
    }

    // Redirect if an unsupported language is used
    if (lang !== "en" && lang !== "ar") {
      navigate("/ar", { replace: true });
    }
  }, [lang, i18n, navigate]);

  const hiddenHeaderFooterRoutes = ["single_service"];

  const isHiddenRoute = hiddenHeaderFooterRoutes.some((route) =>
    location.pathname.includes(route)
  );

  return (
    <main
      className="relative overflow-hidden"
      style={{ backgroundColor: "white" }}
    >
      <ToastContainer />
      <Helmet></Helmet>
      {!isHiddenRoute && <Header />}
      <Outlet />
      {!isHiddenRoute && <Footer />}
    </main>
  );
};

export default App;
