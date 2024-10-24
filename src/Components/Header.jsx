import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { NavLink, useNavigate, useParams } from "react-router-dom"; // Import useParams to get language
import { Helmet } from "react-helmet";
import LightLogo from "../assets/Images/HomeImages/Light_Logo.webp";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { i18n, t } = useTranslation();
  const { lang } = useParams(); // Get the current language from the URL
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const changeLanguage = () => {
    const newLanguage = i18n.language === "en" ? "ar" : "en";
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(`/${i18n.language}`, `/${newLanguage}`);

    i18n.changeLanguage(newLanguage);
    navigate(newPath);
  };

  return (
    <div dir={i18n.language === "ar" ? "rtl" : "ltr"}>
      <Helmet>
        <link rel="preload" as="image" href={LightLogo} />
      </Helmet>
      {/* Header for desktop */}
      <header className="relative bg-white justify-center items-center h-10 transition-all ease-in-out duration-500 text-[#212529] border-b-[1px] border-black px-20 xl:flex lg:flex md:flex hidden">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="email flex items-center">
                <p className="m-0 text-sm font-medium">{t("header.email")}</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ">
                <div className="relative flex items-center cursor-pointer ml-2">
                  <button
                    className="bg-transparent border-0 outline-none"
                    onClick={changeLanguage}
                  >
                    {i18n.language === "en" ? "العربية" : "ENGLISH"}
                  </button>
                </div>
                <a className="icon flex justify-center items-center w-10 h-10 cursor-pointer border-r-[1.5px] border-black">
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    className="text-black text-lg"
                  />
                </a>
                <a className="icon flex justify-center items-center w-10 h-10 border-r-[1.5px] border-black mx-auto cursor-pointer">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-black text-lg"
                  />
                </a>
                <a className="icon flex justify-center items-center w-10 h-10 border-r-[1.5px] border-black mx-auto cursor-pointer">
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className="text-black text-lg"
                  />
                </a>
                <a className="icon flex justify-center items-center w-10 h-10 cursor-pointer border-r-[1.5px] border-black mx-auto">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="text-black text-lg"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white xl:flex lg:flex md:flex hidden px-20 py-2 ">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <a
              href={`/${lang}/home`}
              className="logo w-36 transform scale-150 me-6"
            >
              <img
                src={LightLogo}
                alt="Logo"
                className="min-w-[130px] w-full h-full object-cover"
              />
            </a>
            <ul className="flex justify-center items-center xl:gap-x-12 lg:gap-x-8 gap-x-3 font-bold">
              <li>
                <NavLink
                  to={`/${lang}/home`}
                  className={({ isActive }) =>
                    isActive
                      ? "flex flex-col text-[#ec3237] text-sm"
                      : "flex flex-col text-black text-sm"
                  }
                >
                  <span className="text-lg">01</span> {t("header.nav.home")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/${lang}/about_us`}
                  className={({ isActive }) =>
                    isActive
                      ? "flex flex-col text-[#ec3237] text-sm"
                      : "flex flex-col text-black text-sm"
                  }
                >
                  <span className="text-lg">02</span> {t("header.nav.about_us")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/${lang}/services`}
                  className={({ isActive }) =>
                    isActive
                      ? "flex flex-col text-[#ec3237] text-sm"
                      : "flex flex-col text-black text-sm"
                  }
                >
                  <span className="text-lg">03</span> {t("header.nav.services")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/${lang}/our_projects`}
                  className={({ isActive }) =>
                    isActive
                      ? "flex flex-col text-[#ec3237] text-sm"
                      : "flex flex-col text-black text-sm"
                  }
                >
                  <span className="text-lg">04</span>{" "}
                  {t("header.nav.our_projects")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/${lang}/our_clients`}
                  className={({ isActive }) =>
                    isActive
                      ? "flex flex-col text-[#ec3237] text-sm"
                      : "flex flex-col text-black text-sm"
                  }
                >
                  <span className="text-lg">05</span>{" "}
                  {t("header.nav.our_clients")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/${lang}/industry`}
                  className={({ isActive }) =>
                    isActive
                      ? "flex flex-col text-[#ec3237] text-sm"
                      : "flex flex-col text-black text-sm"
                  }
                >
                  <span className="text-lg">06</span> {t("header.nav.industry")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/${lang}/blogs`}
                  className={({ isActive }) =>
                    isActive
                      ? "flex flex-col text-[#ec3237] text-sm"
                      : "flex flex-col text-black text-sm"
                  }
                >
                  <span className="text-lg">07</span> {t("header.nav.blogs")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/${lang}/employment`}
                  className={({ isActive }) =>
                    isActive
                      ? "flex flex-col text-[#ec3237] text-sm"
                      : "flex flex-col text-black text-sm"
                  }
                >
                  <span className="text-lg">08</span>{" "}
                  {t("header.nav.employment")}
                </NavLink>
              </li>
            </ul>
            <NavLink
              to={`/${lang}/contact`}
              className="text-sm font-bold text-black px-2 py-2 border-[1px] border-black rounded-lg cursor-pointer mx-1"
            >
              {t("header.nav.contact")}
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className="bg-white xl:hidden lg:hidden md:hidden flex justify-between px-8 py-4 shadow-md">
        <a href="/" className="logo w-36">
          <img
            src={LightLogo}
            alt="Logo"
            className="w-full h-full object-cover"
          />
        </a>
        <div className="flex justify-center items-center text-2xl font-bold text-black space-x-8">
          <button onClick={toggleMobileMenu} className="text-black">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50">
          <div className="flex justify-end px-8 py-4">
            <button onClick={toggleMobileMenu} className="text-black text-2xl">
              <FaTimes />
            </button>
          </div>
          <ul className="flex flex-col items-center space-y-4 mt-4 text-lg font-bold">
            <li>
              <NavLink to={`/${lang}/home`} className="text-black">
                {t("header.menu.home")}
              </NavLink>
            </li>
            <li>
              <NavLink to={`/${lang}/about_us`} className="text-black">
                {t("header.menu.about_us")}
              </NavLink>
            </li>
            <li>
              <NavLink to={`/${lang}/services`} className="text-black">
                {t("header.menu.services")}
              </NavLink>
            </li>
            <li>
              <NavLink to={`/${lang}/our_projects`} className="text-black">
                {t("header.menu.our_projects")}
              </NavLink>
            </li>
            <li>
              <NavLink to={`/${lang}/our_clients`} className="text-black">
                {t("header.menu.our_clients")}
              </NavLink>
            </li>
            <li>
              <NavLink to={`/${lang}/industry`} className="text-black">
                {t("header.menu.industry")}
              </NavLink>
            </li>
            <li>
              <NavLink to={`/${lang}/blogs`} className="text-black">
                {t("header.menu.blogs")}
              </NavLink>
            </li>
            <li>
              <NavLink to={`/${lang}/employment`} className="text-black">
                {t("header.menu.employment")}
              </NavLink>
            </li>
          </ul>
          <div className="flex justify-center items-center mt-6">
            <NavLink
              to={`/${lang}/contact`}
              className="text-sm font-bold text-black px-6 py-2 border-[1px] border-black rounded-lg"
            >
              {t("header.nav.contact")}
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
