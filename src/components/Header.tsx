import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else if (saved === "light") {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setDarkMode(true);
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  const linkClass =
    "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200";

  return (
    <header className="bg-slate-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Brand */}
        <NavLink to="/" className="select-none">
          <h1
            className="text-2xl font-extrabold bg-clip-text text-transparent
                   bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400
                   dark:from-teal-300 dark:via-cyan-300 dark:to-blue-300"
          >
            MoodBloom
          </h1>
        </NavLink>

        {/* Nav links */}
        <nav className="hidden md:flex space-x-4">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isActive
                  ? "text-cyan-500 dark:text-cyan-400 font-semibold"
                  : "text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400"
              }`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/cookiejar"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isActive
                  ? "text-cyan-500 dark:text-cyan-400 font-semibold"
                  : "text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400"
              }`
            }
          >
            Cookie Jar
          </NavLink>
          <NavLink
            to="/journal"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isActive
                  ? "text-cyan-500 dark:text-cyan-400 font-semibold"
                  : "text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400"
              }`
            }
          >
            Journal
          </NavLink>
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
            className="focus:outline-none p-2 rounded-md text-cyan-500 dark:text-cyan-400 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition"
          >
            {darkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v1m0 16v1m8.485-8.485h1M3 12H2m15.364 5.364l.707.707M6.343 6.343l-.707-.707m12.728 0l-.707-.707M6.343 17.657l-.707.707M12 7a5 5 0 100 10 5 5 0 000-10z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                stroke="none"
              >
                <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
              </svg>
            )}
          </button>
        </nav>

        {/* Dark mode toggle */}
      </div>
    </header>
  );
}
