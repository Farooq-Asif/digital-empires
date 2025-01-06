import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "../Components/ThemeToggle";
import { useSelector } from "react-redux";
import { MdSpaceDashboard } from "react-icons/md";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { token } = useSelector((state) => state.user);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const theme = localStorage.getItem("theme");
 

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0  w-64 h-full ${
          theme === "dark" ? "bg-white text-black" : "bg-black text-white "
        }   transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden z-50`}
      >
        <div className="flex justify-between items-center p-4">
          {/* <img src={icon} alt="Logo" className="w-8 h-8" /> */}
          {/* <span className="text-xl font-semibold z-0">Digital Empires</span> */}
        </div>
        <div className="space-y-4 p-4">
          <NavLink
            to="/"
            className={`block py-2 px-4 ${
              theme === "dark"
                ? "hover:bg-white text-black"
                : "hover:bg-black text-white"
            }  `}
          >
            Home
          </NavLink>
          <NavLink
            to="/press"
            className={`block py-2 px-4 ${
              theme === "dark"
                ? "hover:bg-white text-black"
                : "hover:bg-black text-white"
            }  `}
          >
            Press
          </NavLink>
          <NavLink
            to="/contactus"
            className={`block py-2 px-4 ${
              theme === "dark"
                ? "hover:bg-white text-black"
                : "hover:bg-black text-white"
            }  `}
          >
            Contact
          </NavLink>
          <NavLink
            to="/ceodetails"
            className={`block py-2 px-4 ${
              theme === "dark"
                ? "hover:bg-white text-black"
                : "hover:bg-black text-white"
            }  `}
          >
            Ceo
          </NavLink>
          
         
        </div>
      </div>

      <nav className="flex items-center justify-between p-4 header text-white fixed top-0 right-0 left-0 z-[1030] bg-[rgba(0,0,0,0.15)]">
        <div className="flex items-center ">
    
          <span className="text-xl  font-extrabold">S<span className="text-[hsl(358.36,95.63%,44.9%)]">KILLPRO</span> LTD
          </span>
        </div>
        <div className="flex items-center space-x-6">
          <ThemeToggle />

          <button
            className="text-white md:hidden" // Only shows on small screens
            onClick={toggleSidebar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>

          <div className="hidden md:flex items-center space-x-6">
            <NavLink to="/" className="hover:text-gray-300">
              Home
            </NavLink>
            <NavLink to="/press" className="hover:text-gray-300">
              Press
            </NavLink>
            <NavLink to="/contactus" className="hover:text-gray-300">
              Contact
            </NavLink>
            <NavLink to="/ceodetails" className="hover:text-gray-300">
              Ceo
            </NavLink>
            {token ? (
              <NavLink to="/dashboard">
                <MdSpaceDashboard size={30} cursor="pointer" />
              </NavLink>
            ) : (
              <NavLink to="/login">
                <button className="px-4 py-1.5 bg-white text-blue-900 rounded-full hover:bg-gray-200 transition-colors">
                  Login
                </button>
              </NavLink>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
