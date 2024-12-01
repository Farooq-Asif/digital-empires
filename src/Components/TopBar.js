import React, { useContext, useState } from "react";
import { FaHome, FaSignOutAlt } from "react-icons/fa";  
import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { GlobalInfo } from "../App";
import { FiChevronDown } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";

const TopBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const storage = localStorage.getItem("persist:digital-empires");
  const parsedData = storage ? JSON.parse(storage) : null;

  const {  setIsCollapsed } = useContext(GlobalInfo);
  const navigate = useNavigate();

  const handleLogout = () => {
    const clearStorage = localStorage.clear(parsedData);
    navigate("/login");
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="flex items-center bg-[rgb(253,0,0)] px-4 py-3">
      <div className="flex items-center">
        <FaBars
          color="white"
          size={20}
          cursor="pointer"
          onClick={() => setIsCollapsed(prev => !prev)}
        />
      </div>

      <div className="flex ml-auto items-center space-x-4 relative">
        <div className="me-10">
          <ThemeToggle />
        </div>

        <button
          onClick={toggleDropdown}
          className="text-white p-2 rounded-full  focus:outline-none"
        >
          <FiChevronDown className="ml-2" size={24} />
        </button>
        {isOpen && (
          <div className="absolute right-0 top-10 mt-2 w-[100px] bg-white shadow-lg rounded-md ">
              <div className=" hover:bg-slate-600 hover:text-white py-2 px-2 flex items-center  cursor-pointer">
              <Link to="/" className="flex items-center gap-2">
              <FaHome/>
                <span className="text-danger text-center">Home</span>
              </Link>
            </div>
            <div
              className="text-red-600 gap-2 hover:bg-slate-600 hover:text-white  py-2 px-2 flex items-center  cursor-pointer"
              onClick={handleLogout}
            >
               <FaSignOutAlt/>
              <span className="text-danger ">Logout</span>
            </div>
          
          </div>
        )}
      </div>
    </div>
  );
};

export default TopBar;
