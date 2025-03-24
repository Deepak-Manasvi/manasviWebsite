import React from "react";
import backgroundImage from "../assets/Images/Footer.jpg";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import mlogo from "../assets/Images/manasvilogo.png";
import { Link } from "react-router-dom";
import { IoLogoFacebook, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";

const Footer = () => {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center  py-12"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-white">
          <div>
            <h2 className="text-lg md:text-xl font-semibold">Product</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:underline text-base">
                  Employee database
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-base">
                  Payroll
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-base">
                  Absences
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-base">
                  Time tracking
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-base">
                  Shift planner
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-base">
                  Recruiting
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-semibold">Information</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:underline text-base">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-base">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-base">
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-semibold">Company</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/about" className="hover:underline text-base">
                  About us
                </a>
              </li>
              <li>
                <a href="/career" className="hover:underline text-base">
                  Careers
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline text-base">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-base">
                  Lift Media
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-semibold">Subscribe</h2>
            <form className="mt-4">
              <div className="flex flex-col md:flex-row items-center">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full md:flex-1 px-4 py-2 rounded-md text-gray-900 md:mr-2 bg-white"
                />
                <button className="w-full md:w-auto mt-2 md:mt-0 px-4 py-2 bg-purple-600 rounded-md hover:bg-purple-700 text-white">
                  Subscribe
                </button>
              </div>
              <p className="mt-4 text-sm md:text-base">
                Hello, we are Lift Media. Our goal is to translate the positive
                effects from ...
              </p>
            </form>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row items-center justify-between border-t border-gray-700 pt-4 text-center text-sm text-white md:text-base space-y-4 md:space-y-0">
          <div className="flex justify-center md:justify-start">
            <img src={mlogo} className="h-6 md:h-12" alt="Company Logo" />
          </div>
          <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-8">
            <a href="#" className="hover:underline">
              Terms
            </a>
            <a href="#" className="hover:underline">
              Privacy
            </a>
            <a href="#" className="hover:underline">
              Cookies
            </a>
          </div>
          <div className="flex justify-center space-x-4">
            <Link
              to="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHAAqowuN-m9AAAAZDAuUoY5uxO81U7SEwFB42PI9wsJ2PJ_yCmar--HYuTGEQnqKueTr__SIp9r42Rur5oDJjqQY4QKWA981SoUAaS5jYta0xWrl2F2EU8duJ07NHIV8zFT5A=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fmanasvi-technologies-7aa426262%2F"
              target="_blank"
              rel="noreferrer noopener"
              className=" flex items-center justify-center"
            >
              <IoLogoLinkedin className="w-6 h-6 hover:text-gray-400" />
            </Link>
            <Link
              to="https://x.com/i/flow/login?redirect_after_login=%2Fmanasvitech01"
              target="_blank"
              rel="noreferrer noopener"
              className=" flex items-center justify-center"
            >
              <IoLogoTwitter className="w-6 h-6 hover:text-gray-400" />
            </Link>
            <Link
                to="https://www.facebook.com/people/Manasvi-Technologies-OPC-Pvt-Ltd/61555158365754/"
                target="_blank"
                rel="noreferrer noopener"
                className=" flex items-center justify-center"
              >
                <IoLogoFacebook className="w-6 h-6 hover:text-gray-400" />
              </Link>
          </div>
        </div>

        <div className="mt-8 text-white text-center text-sm md:text-base">
          <p>
            111B, 80 Feet Rd, above Bhagwan Ustad gulab jamu wala, Old Ashoka
            Garden, Ashoka Garden, Bhopal, Madhya Pradesh 462023
          </p>
          <p>
            203 Shagun Arcade, near Medanta Hospital, at Rashoma Square, Vijay
            Nagar, Indore
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
