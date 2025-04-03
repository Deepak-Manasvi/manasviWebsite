/* eslint-disable no-unused-vars */
// src/components/Admin.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import mlogo from "../../assets/Images/manasvilogo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Admin = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div
      className="flex h-screen text-white bg-gray-100
"
    >
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1  flex flex-col overflow-hidden">
        <Header toggleSidebar={toggleSidebar} />
        <div className="flex-1 overflow-auto p-4">
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [showProductsMenu, setShowProductsMenu] = useState(false);

  const toggleProductsMenu = () => {
    setShowProductsMenu(!showProductsMenu);
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-[#1F003A] text-white transition-transform duration-300 ${
        isOpen ? "translate-x-0 w-64 z-20" : "-translate-x-full w-0"
      }`}
    >
      <div className="flex items-center justify-between pl-0 bg-white p-4">
        {isOpen && <img src={mlogo} alt="Logo" className="rounded-full " />}
        {/* <button onClick={toggleSidebar} className="text-white focus:outline-none">
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button> */}
      </div>
      <nav className={`mt-4 ${isOpen ? "block" : "hidden"}`}>
        <ul>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/admin/welcome">Dashboard</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/admin/CreateTeam">Create Team</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/admin/contact-us-data">Contact Us Data</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <a
              href="#"
              onClick={toggleProductsMenu}
              className="flex items-center"
            >
              <span className="mr-2">Manage Products</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 ${
                  showProductsMenu ? "transform rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
            {showProductsMenu && (
              <div className="ml-4 mt-2 bg-gray-700 rounded-md shadow-lg">
                <Link
                  to="/admin/CreateProducts"
                  className="block px-4 py-2 text-white hover:bg-gray-600"
                >
                  Create Product
                </Link>
                <Link
                  to="/admin/ManageProducts"
                  className="block px-4 py-2 text-white hover:bg-gray-600"
                >
                  Manage Products
                </Link>
              </div>
            )}
            
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/admin/CreatePortfolio">Create Portfolio</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/admin/services">Manage Services</Link>
          </li>

          <li className="p-4 hover:bg-gray-700">
            <Link to="/admin/ManageTeam">Team Management</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/admin/ManageReviews">Review Management</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/admin/CreateReview">Create Review</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/admin/ManageContacts">Contact Management</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/admin/logout">Logout</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const Header = ({ toggleSidebar }) => {
  return (
    <div className="flex justify-between items-center bg-white p-4">
      <img src={mlogo} className="h-10" alt="" />
      <h2 className="hidden md:block text-3xl font-bold font-poppins text-gray-800  bg-clip-text ">
        Admin Dashboard
      </h2>
      <button
        onClick={toggleSidebar}
        className="p-2 bg-[white] text-black rounded"
      >
        <FaBars />
      </button>
    </div>
  );
};

export default Admin;
