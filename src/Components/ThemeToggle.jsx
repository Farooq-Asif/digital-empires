import React, { useState, useContext, useEffect } from "react";
import { FaRegMoon, FaSun } from "react-icons/fa"; // Import sun icon for light mode
import { GlobalInfo } from "../App";
import { LuSun } from "react-icons/lu";

const ThemeToggle = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { setThemeValue, themeValue } = useContext(GlobalInfo);
    const savedTheme = localStorage.getItem("theme");

    const setTheme = (theme) => {
        setThemeValue(theme);
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
                    <FaRegMoon color="white" cursor='pointer' size={20} onClick={() => setMenuOpen((prev) => !prev)} />
                ) : (
                    <LuSun size={20} cursor='pointer' onClick={() => setMenuOpen((prev) => !prev)} />
                )}

            {/* Dropdown Menu */}
            {menuOpen && (
                <div className="absolute  left-0 top-5 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 w-36 rounded-lg shadow-lg py-2">
                    <button
                        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 w-full"
                        onClick={() => setTheme("light")}
                    >
                        <LuSun color="white" cursor='pointer' size={16} />
                        Light
                    </button>
                    <button
                        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 w-full"
                        onClick={() => setTheme("dark")}
                    >
                        <FaRegMoon color="white" size={16} cursor='pointer' />
                        Dark
                    </button>
                </div>
            )}
        </div>
    );
};

export default ThemeToggle;
