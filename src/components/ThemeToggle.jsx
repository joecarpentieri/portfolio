import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";


export const ThemeToggle = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => { /* when reload the page/open another tab with this application, remembers if you set to dark mode or light mode and keeps the same */
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, [])

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark"); /* adding to local storage that dark is the current theme */
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark"); /* adding to local storage that dark is the current theme */
      setIsDarkMode(true);
    }
  };


  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed top-5 right-5 z-50 p-2 rounded-full",
        "hidden sm:flex items-center justify-center",
        "transition-colors duration-300 focus:outline-none"
      )}
    >

      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
        ) : (
        <Moon className="h-6 w-6 text-blue-900" />
        )}
    </button>
  );
};