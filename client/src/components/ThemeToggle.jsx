import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setDark(storedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setDark(prefersDark);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      onClick={() => setDark((prev) => !prev)}
      className="w-10 h-10 flex items-center justify-center rounded-full border border-skin-accent text-skin-accent hover:bg-skin-accent hover:text-skin-bg transition-all duration-300 shadow-lg glow-sm"
      aria-label="Toggle Theme"
    >
      {dark ? (
        <Sun className="w-5 h-5 animate-pulse-glow" strokeWidth={1.5} />
      ) : (
        <Moon className="w-5 h-5 animate-pulse-glow" strokeWidth={1.5} />
      )}
    </button>
  );
};

export default ThemeToggle;
