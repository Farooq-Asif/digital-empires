import React, { useState } from 'react';
import icon from '../Assets/Images/star-badge.png';
import { NavLink } from 'react-router-dom';
import ThemeToggle from '../Components/ThemeToggle';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);  // Sidebar open/close state

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSidebar = () => {
    console.log("Toggling Sidebar", isSidebarOpen); // Debugging state change
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-gray-800 text-white transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden z-50`}
      >
        {/* Sidebar content */}
        <div className="flex justify-between items-center p-4">
          <img src={icon} alt="Logo" className="w-8 h-8" />
          <span className="text-xl font-semibold">Digital Empires</span>
        </div>
        <div className="space-y-4 p-4">
          <NavLink to="/" className="block py-2 px-4 hover:bg-gray-700">Home</NavLink>
          <a href="#press" className="block py-2 px-4 hover:bg-gray-700">Press</a>
          <NavLink to="/contactus" className="block py-2 px-4 hover:bg-gray-700">Contact</NavLink>
          <NavLink to="#products" className="block py-2 px-4 hover:bg-gray-700">Products</NavLink>
          <a href="https://bestcartoffer.com/" className="block py-2 px-4 hover:bg-gray-700">Best Cart Offer</a>
          <a href="#product2" className="block py-2 px-4 hover:bg-gray-700">Product 2</a>
          <a href="#product3" className="block py-2 px-4 hover:bg-gray-700">Product 3</a>
        </div>
      </div>

      <nav className="flex items-center justify-between p-4 header text-white fixed top-0 right-0 left-0 z-[1030] bg-[rgba(0,0,0,0.15)]">
        <div className="flex items-center space-x-2">
          <img src={icon} alt="Logo" className="w-8 h-8" />
          <span className="text-xl font-semibold">Digital Empires</span>
        </div>
        <div className="flex items-center space-x-6">
          <ThemeToggle />

          <button
            className="text-white md:hidden"  // Only shows on small screens
            onClick={toggleSidebar} 
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>

          <div className="hidden md:flex items-center space-x-6">
            <NavLink to="/" className="hover:text-gray-300">Home</NavLink>
            <NavLink to="/press" className="hover:text-gray-300">Press</NavLink>
            <NavLink to="/contactus" className="hover:text-gray-300">Contact</NavLink>
            <NavLink to="#products" className="hover:text-gray-300">Products</NavLink>
            <button className="px-4 py-1.5 bg-white text-blue-900 rounded-full hover:bg-gray-200 transition-colors">
              Join us
            </button>
          </div>
        </div>
      </nav>
     </>
  );
};

export default Navbar;
