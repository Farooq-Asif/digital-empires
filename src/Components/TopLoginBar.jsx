import React from 'react';
import ThemeToggle from './ThemeToggle';
import logo from '../Assets/Images/favicon.png'; 

const TopLoginBar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-100 shadow-md">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-8 " />
        <span className="text-xl font-bold text-gray-700">igital Empires</span>
      </div>
      
   
    </nav>
  );
};

export default TopLoginBar;
