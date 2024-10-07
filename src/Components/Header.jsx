import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import LightLogo from "../assets/Images/HomeImages/Light_Logo.png";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import profile icon

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div dir="rtl">
      <Helmet>
        <link rel="preload" as="image" href={LightLogo} />
      </Helmet>
      <header className="relative bg-white justify-center items-center h-10 transition-all ease-in-out duration-500 text-[#212529] border-b-[1px] border-black px-20 xl:flex lg:flex md:flex hidden">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="email flex items-center">
                <p className="m-0 text-sm font-medium">
                  shootingstar.creativity@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ">
                <div className="relative flex items-center cursor-pointer ml-2">
                  <button className="bg-transparent border-0 outline-none">
                    ENGLISH
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

      <nav className="bg-white xl:flex lg:flex md:flex hidden px-20 py-4 ">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <a
              href="./index.html"
              className="logo w-36 transform scale-150 me-6"
            >
              <img
                src={LightLogo}
                alt="Logo"
                className="min-w-[130px] w-full h-full object-cover"
              />
            </a>
            <ul className="flex justify-center items-center xl:gap-x-8 lg:gap-x-8 gap-x-3 font-bold">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "flex flex-col text-[#ec3237] text-sm"
                      : "flex flex-col text-black text-sm"
                  }
                >
                  <span className="text-lg">01</span> الرئيسية
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about_us"
                  className={({ isActive }) =>
                    isActive
                      ? "flex flex-col text-[#ec3237] text-sm"
                      : "flex flex-col text-black text-sm"
                  }
                >
                  <span className="text-lg">02</span> من نحن
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive
                      ? "flex flex-col text-[#ec3237] text-sm"
                      : "flex flex-col text-black text-sm"
                  }
                >
                  <span className="text-lg">03</span> الخدمات
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Our_business"
                  className={({ isActive }) =>
                    isActive
                      ? "flex flex-col text-[#ec3237] text-sm"
                      : "flex flex-col text-black text-sm"
                  }
                >
                  <span className="text-lg">04</span> أعمالنا
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Our_customers"
                  className={({ isActive }) =>
                    isActive
                      ? "flex flex-col text-[#ec3237] text-sm"
                      : "flex flex-col text-black text-sm"
                  }
                >
                  <span className="text-lg">05</span> عملائنا
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Industry"
                  className={({ isActive }) =>
                    isActive
                      ? "flex flex-col text-[#ec3237] text-sm"
                      : "flex flex-col text-black text-sm"
                  }
                >
                  <span className="text-lg">06</span> الصناعة
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blogs"
                  className={({ isActive }) =>
                    isActive
                      ? "flex flex-col text-[#ec3237] text-sm"
                      : "flex flex-col text-black text-sm"
                  }
                >
                  <span className="text-lg">07</span> المدونات
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/recruitment"
                  className={({ isActive }) =>
                    isActive
                      ? "flex flex-col text-[#ec3237] text-sm"
                      : "flex flex-col text-black text-sm"
                  }
                >
                  <span className="text-lg">08</span> التدريب و التوظيف
                </NavLink>
              </li>
            </ul>

            <div className="xl:flex lg:flex hidden bg-black text-white px-4 py-2 rounded text-[1.2vw] items-center justify-center text-center">
              <a href="./register.html">تواصل معانا</a>
            </div>
            <div className="icon hidden cursor-pointer">
              <FontAwesomeIcon icon={["fas", "bars"]} />
            </div>
          </div>
        </div>
      </nav>
      <nav className="bg-white xl:hidden lg:hidden md:hidden flex pe-6 ps-12">
        <div className="flex justify-between w-full">
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-[#ec3237] text-2xl"
            >
              {isMobileMenuOpen ? (
                <FaTimes /> // Close icon when the menu is open
              ) : (
                <FaBars /> // Menu icon when the menu is closed
              )}
            </button>
          </div>
          <div>
            <img
              src={LightLogo}
              alt="Logo"
              className="min-w-[100px] w-[200px] h-full object-cover"
            />
          </div>
        </div>
        {isMobileMenuOpen && (
          <ul
            className="fixed top-[64px] right-0 h-full w-full bg-white transform transition-all duration-500 ease-in-out z-50 lg:hidden text-center flex flex-col gap-y-6 font-bold clip-path-open"
            style={{ transition: "clip-path 0.5s ease-in-out" }}
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "flex flex-col text-[#ec3237] text-sm mt-6"
                    : "flex flex-col text-black text-sm mt-6"
                }
                onClick={toggleMobileMenu}
              >
                <span className="text-lg">01</span> الرئيسية
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about_us"
                className={({ isActive }) =>
                  isActive
                    ? "flex flex-col text-[#ec3237] text-sm"
                    : "flex flex-col text-black text-sm"
                }
                onClick={toggleMobileMenu}
              >
                <span className="text-lg">02</span> من نحن
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? "flex flex-col text-[#ec3237] text-sm"
                    : "flex flex-col text-black text-sm"
                }
                onClick={toggleMobileMenu}
              >
                <span className="text-lg">03</span> الخدمات
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Our_business"
                className={({ isActive }) =>
                  isActive
                    ? "flex flex-col text-[#ec3237] text-sm"
                    : "flex flex-col text-black text-sm"
                }
                onClick={toggleMobileMenu}
              >
                <span className="text-lg">04</span> أعمالنا
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Our_customers"
                className={({ isActive }) =>
                  isActive
                    ? "flex flex-col text-[#ec3237] text-sm"
                    : "flex flex-col text-black text-sm"
                }
                onClick={toggleMobileMenu}
              >
                <span className="text-lg">05</span> عملائنا
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Industry"
                className={({ isActive }) =>
                  isActive
                    ? "flex flex-col text-[#ec3237] text-sm"
                    : "flex flex-col text-black text-sm"
                }
                onClick={toggleMobileMenu}
              >
                <span className="text-lg">06</span> الصناعة
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  isActive
                    ? "flex flex-col text-[#ec3237] text-sm"
                    : "flex flex-col text-black text-sm"
                }
                onClick={toggleMobileMenu}
              >
                <span className="text-lg">07</span> المدونات
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/recruitment"
                className={({ isActive }) =>
                  isActive
                    ? "flex flex-col text-[#ec3237] text-sm"
                    : "flex flex-col text-black text-sm"
                }
                onClick={toggleMobileMenu}
              >
                <span className="text-lg">08</span> التدريب و التوظيف
              </NavLink>
            </li>
            <li className="xl:hidden lg:hidden md:hidden flex bg-black text-white px-4 py-[10px] text-md items-center justify-center text-center rounded-md w-44 mx-auto">
              <a href="./register.html">تواصل معانا</a>
            </li>
            <li className="xl:hidden lg:hidden md:hidden flex bg-black text-white px-4 py-[10px] text-xl items-center justify-center text-center rounded-md w-44 mx-auto">
              <a href="./register.html">English</a>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Header;
