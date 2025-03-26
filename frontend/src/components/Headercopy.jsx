/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import mlogo from "../assets/Images/manasvilogo.png";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Reviews } from "./Reviews";

const Header = () => {
  const [isBottomBarVisible, setBottomBarVisible] = useState(false);
  const [isServiceBarVisible, setServiceBarVisible] = useState(false);

  const [isHeaderVisible, setHeaderVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  const serviceDropdownRef = useRef(null);

  const toggleBottomBar = () => {
    setBottomBarVisible(!isBottomBarVisible);
  };

  const toggleServiceBar = () => {
    setServiceBarVisible(!isServiceBarVisible);
  };

  // Function to close the service bar
  const closeServiceBar = () => {
    setServiceBarVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        serviceDropdownRef.current &&
        !serviceDropdownRef.current.contains(event.target)
      ) {
        closeServiceBar();
      }
    };

    // Add event listener when dropdown is open
    if (isServiceBarVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isServiceBarVisible]);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setHeaderVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  // Example: User authentication state and role
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState("user");

  useEffect(() => {
    setUserRole(role);
    setIsLoggedIn(!!token);
  }, [role, token]);

  // Example: Get user role from context or state
  // const userRole = "admin"; // Replace with actual logic to get user role

  // ${isHeaderVisible
  //   ? "transform translate-y-0"
  //   : "transform -translate-y-full"
  // }
  return (
    <div>
      <nav
        className={`bg-white p-4 md:p-2 fixed top-0 left-0 w-full z-60 h-16 transition-transform duration-300`}
      >
        <div className="container mx-auto md:mx-0 flex justify-between items-center ">
          <div>
            <img
              src={mlogo}
              alt="Manasvi Logo"
              className="h-6 md:h-10 cursor-pointer md:mr-2  md:max-w-[250px] "
              onClick={() => navigate("/")}
            />
          </div>
          <div className="hidden md:flex  space-x-6 md:space-x-3 md:text-nowrap">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-black font-bold underline" : "text-black"
              }
              onClick={closeServiceBar}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-black font-bold underline" : "text-black"
              }
              onClick={closeServiceBar}
            >
              About Us
            </NavLink>
            <NavLink
              ref={serviceDropdownRef}
              className={`relative group cursor-pointer `}
            >
              <NavLink
                to="#" // Prevents navigation, acts as a dropdown trigger
                onClick={toggleServiceBar}
                className={({ isActive }) =>
                  window.location.pathname.startsWith("/services")
                    ? "text-black font-bold underline"
                    : "text-black"
                }
              >
                Services
                <FaAngleDown className="inline-block ml-1" />
              </NavLink>
              {isServiceBarVisible && (
                <div className="absolute -left-20 text-center leading-none mt-2 w-56 bg-white text-black rounded-lg shadow-lg transition-opacity duration-300">
                  <NavLink
                    to="/services/web"
                    onClick={toggleServiceBar}
                    className={({ isActive }) =>
                      isActive
                        ? "block px-4 py-2 font-bold underline"
                        : "block px-4 py-2"
                    }
                  >
                    Web Development
                  </NavLink>
                  <NavLink
                    to="/services/digital"
                    onClick={toggleServiceBar}
                    className={({ isActive }) =>
                      isActive
                        ? "block px-4 py-2 font-bold underline"
                        : "block px-4 py-2"
                    }
                  >
                    Digital Marketing
                  </NavLink>
                  <NavLink
                    to="/services/app"
                    onClick={toggleServiceBar}
                    className={({ isActive }) =>
                      isActive
                        ? "block px-4 py-2 font-bold underline"
                        : "block px-4 py-2"
                    }
                  >
                    App Development
                  </NavLink>
                  <NavLink
                    to="/services/software"
                    onClick={toggleServiceBar}
                    className={({ isActive }) =>
                      isActive
                        ? "block px-4 py-2 font-bold underline"
                        : "block px-4 py-2"
                    }
                  >
                    Software Development
                  </NavLink>
                </div>
              )}
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? "text-black font-bold underline" : "text-black"
              }
              onClick={closeServiceBar}
            >
              Products
            </NavLink>
            <NavLink
              // to="https://manasviportfolio.online/"
              to="/portfolio"
              className={({ isActive }) =>
                isActive ? "text-black font-bold underline" : "text-black"
              }
              onClick={closeServiceBar}
            >
              Portfolio
            </NavLink>
            <NavLink
              to="/career"
              className={({ isActive }) =>
                isActive ? "text-black font-bold underline" : "text-black"
              }
              onClick={closeServiceBar}
            >
              Career
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-black font-bold underline" : "text-black"
              }
              onClick={closeServiceBar}
            >
              Contact Us
            </NavLink>
            {/* <NavLink
              to="/reviews"
              className={({ isActive }) =>
                isActive ? "text-black font-bold underline" : "text-black"
              }
            >
              Reviews
            </NavLink> */}
          </div>

          <div className="hidden md:block space-x-4 md:ml-2">
            {/* <a href="tel:+8319056741" className="text-black">
              📞 8319056741
            </a>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-black font-bold underline" : "text-black"
              }
            >
              <button className="text-black focus:outline-none py-1 px-4 border border-gray-400 rounded-2xl">
                Contact Us
              </button>
            </NavLink> */}
            {userRole === "admin" ? (
              <NavLink
                to="/admin/welcome"
                className={({ isActive }) =>
                  isActive ? "text-black font-bold underline" : "text-black"
                }
              >
                <button className="text-black focus:outline-none py-1 px-4 border border-gray-400 rounded-2xl">
                  Admin
                </button>
              </NavLink>
            ) : (
              <NavLink>
                <Link
                  to="/login"
                  className="text-black focus:outline-none py-2 px-5 border border-gray-400 rounded-2xl"
                >
                  Login
                </Link>
              </NavLink>
            )}
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleBottomBar}
              className="text-black focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>
      </nav>

      {/* Bottom Bar for Mobile */}
      <div
        className={`fixed top-0 left-0 w-full h-screen backdrop-filter backdrop-blur-2xl  bg-[#040615] bg-opacity-80 z-60 transition-transform duration-500 transform ${
          isBottomBarVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="container mx-auto p-4 flex flex-col space-y-4">
          <div className="w-full h-20px  flex items-center justify-between">
            <div className=" h-full ">
              <p className="text-gray-300 text-xl">Menu</p>
            </div>
            <div onClick={toggleBottomBar} className=" h-full ">
              <p className="text-gray-300 text-xl">✖</p>
            </div>
          </div>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-white font-bold underline mt-3"
                : "text-white mt-2"
            }
            onClick={(closeServiceBar, toggleBottomBar)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-white font-bold underline" : "text-white"
            }
            onClick={(closeServiceBar, toggleBottomBar)}
          >
            About Us
          </NavLink>
          <div className="relative">
            <button
              onClick={toggleServiceBar}
              className="text-white focus:outline-none flex items-center"
            >
              Services <FaAngleDown />
            </button>
            {isServiceBarVisible && (
              <div className="absolute left-0 mt-2 w-full bg-[#3c4785] text-white rounded-lg shadow-lg">
                <NavLink
                  to="/services/web"
                  className={({ isActive }) =>
                    isActive
                      ? "block px-4 py-2 font-bold underline"
                      : "block px-4 py-2"
                  }
                  onClick={toggleBottomBar}
                >
                  Web Development
                </NavLink>
                <NavLink
                  to="/services/digital"
                  className={({ isActive }) =>
                    isActive
                      ? "block px-4 py-2 font-bold underline"
                      : "block px-4 py-2"
                  }
                  onClick={toggleBottomBar}
                >
                  Digital Marketing
                </NavLink>
                <NavLink
                  to="/services/app"
                  className={({ isActive }) =>
                    isActive
                      ? "block px-4 py-2 font-bold underline"
                      : "block px-4 py-2"
                  }
                  onClick={toggleBottomBar}
                >
                  App Development
                </NavLink>
                <NavLink
                  to="/services/software"
                  className={({ isActive }) =>
                    isActive
                      ? "block px-4 py-2 font-bold underline"
                      : "block px-4 py-2"
                  }
                  onClick={toggleBottomBar}
                >
                  Software Development
                </NavLink>
              </div>
            )}
          </div>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive ? "text-white font-bold underline" : "text-white"
            }
            onClick={(closeServiceBar, toggleBottomBar)}
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "text-white font-bold underline" : "text-white"
            }
            onClick={(closeServiceBar, toggleBottomBar)}
          >
            Products
          </NavLink>
          <NavLink
            to="/team"
            className={({ isActive }) =>
              isActive ? "text-white font-bold underline" : "text-white"
            }
            onClick={(closeServiceBar, toggleBottomBar)}
          >
            Team
          </NavLink>
          <NavLink
            to="/reviews"
            className={({ isActive }) =>
              isActive ? "text-white font-bold underline" : "text-white"
            }
            onClick={(closeServiceBar, toggleBottomBar)}
          >
            Reviews
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-white font-bold underline" : "text-white"
            }
            onClick={(closeServiceBar, toggleBottomBar)}
          >
            Contact Us
          </NavLink>
          <a
            href="tel:+8319056741"
            className="text-white"
            onClick={(closeServiceBar, toggleBottomBar)}
          >
            8319056741 📞
          </a>
          {/* {userRole === "admin" && (
            <NavLink
              to="/admin/welcome"
              className={({ isActive }) =>
                isActive ? "text-white font-bold underline" : "text-white"
              }
              onClick={toggleBottomBar}
            >
              Admin
            </NavLink>
          )} */}
          {userRole === "admin" ? (
            <NavLink
              to="/admin/welcome"
              className={({ isActive }) =>
                isActive ? "text-white font-bold underline" : "text-white"
              }
              onClick={toggleBottomBar}
            >
              Admin
            </NavLink>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "text-white font-bold underline" : "text-white"
              }
              onClick={toggleBottomBar}
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
