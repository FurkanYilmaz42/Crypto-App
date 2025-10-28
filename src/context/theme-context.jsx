import { createContext, useEffect } from "react";
import { useState, useContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("theme") === "dark");

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {

      const root = window.document.documentElement;

      if (isDarkMode) {
        root.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        root.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

//custom hook

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("Provider ile App Sarmala ");
  }
  return context;
};
