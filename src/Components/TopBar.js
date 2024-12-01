import React, { useContext, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { GrNotification } from "react-icons/gr";
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaBars } from "react-icons/fa6";
import { GlobalInfo } from "../App";
import { FiChevronDown } from "react-icons/fi";

const TopBar = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const storage = localStorage.getItem("persist:digital-empires");
  const parsedData = storage ? JSON.parse(storage) : null;

  const { isCollapsed, setIsCollapsed } = useContext(GlobalInfo);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
          // onClick={() => setIsCollapsed(prev => !prev)}
        />
      </div>

      <div className="flex ml-auto items-center space-x-4 relative">
        <button
          onClick={toggleDropdown}
          className="text-white p-2 rounded-full  focus:outline-none"
        >
                  <FiChevronDown className="ml-2" size={24} />

        </button>

        {isOpen && (
          <div className="absolute right-0 hover:bg-slate-600 top-10 mt-2 w-30 bg-white shadow-lg rounded-md ">

            <div
              className="text-red-600 py-2 px-2 flex items-center  cursor-pointer"
              onClick={handleLogout}
            >
              {/* <IoIosLogOut color="white" fontSize={25} /> */}
              <span className="text-danger hover:text-white">Logout</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopBar;
