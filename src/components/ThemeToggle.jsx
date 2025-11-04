import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
      localStorage.setItem("theme", "light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={cn(
        "fixed top-5 right-5 z-50 p-2 rounded-full border border-border",
        "bg-card/70 backdrop-blur-md hover:bg-primary/10",
        "transition-all duration-300 shadow-md",
        "max-sm:hidden"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5 text-yellow-400 transition-transform duration-500 rotate-180" />
      ) : (
        <Moon className="h-5 w-5 text-blue-900 transition-transform duration-500 rotate-180" />
      )}
    </button>
  );
};
