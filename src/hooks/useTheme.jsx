import React, { createContext, useState, useEffect, useContext } from "react";

// Create ThemeContext
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = (theme) => {
    localStorage.setItem("theme", theme);
    setTheme(theme);
  };

  useEffect(() => {
    // Apply theme styles to body
    document.body.classList.toggle("bg-black", theme === "dark");
    document.body.classList.toggle("text-white", theme === "dark");
    document.body.classList.toggle("bg-white", theme === "light");
    document.body.classList.toggle("text-gray-900", theme === "light");
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
