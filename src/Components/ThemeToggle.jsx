import React, { useState, useContext, useEffect } from "react";
import { FaRegMoon } from "react-icons/fa"; 
import { GlobalInfo } from "../App";
import { LuSun } from "react-icons/lu";
import { PiUserCheckBold } from "react-icons/pi";

const ThemeToggle = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const savedTheme = localStorage.getItem("theme") || 'light';
    const{valueTheme,setThemeValue}=useContext(GlobalInfo)
    const setTheme = (theme) => {
        setThemeValue(theme)
        localStorage.setItem("theme", theme);
        setMenuOpen(false); 
    };
   

    useEffect(() => {
          document.body.classList.add("transition-colors", "duration-1000");

     
        if (savedTheme === "dark") {
            document.body.classList.add("bg-black", "text-white");
            document.body.classList.remove("bg-white", "text-gray-900");
        } else if (savedTheme === "light") {
            document.body.classList.add("bg-white", "text-gray-900");
            document.body.classList.remove("bg-black", "text-white");
        }
    }, [savedTheme]);

    return (
        <div className="relative flex items-center gap-4">
            
            {savedTheme === "dark" ? (
                    <FaRegMoon size={20} color="white" cursor='pointer'  onClick={() => setMenuOpen((prev) => !prev)} />
                ) : (
                    <LuSun size={20} color="white" cursor='pointer' onClick={() => setMenuOpen((prev) => !prev)} />
                )}

            {/* Dropdown Menu */}
            {menuOpen && (
                   <div
                   className="absolute top-7 right-0 md:left-0 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 
                   w-36 rounded-lg shadow-lg py-2 z-50"
               >
                    <button
                        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 w-full"
                        onClick={() => setTheme("light")}
                    >
                        <LuSun  color="white" cursor='pointer' size={16} />
                        Light
                    </button>
                    <button
                        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 w-full"
                        onClick={() => setTheme("dark")}
                    >
                        <FaRegMoon color="white" cursor='pointer' size={16} />
                        Dark
                    </button>
                </div>
            )}
        </div>
    );
};

export default ThemeToggle;
