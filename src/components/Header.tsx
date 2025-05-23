import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../firebasConfig";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [uid, setUid] = useState<string | null>(null);

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

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, perform necessary actions
        const uid = user.uid;
        console.log("User is signed in with UID:", uid);
        // const storedUid = localStorage.getItem("token");

        setUid(uid);
        // Update UI elements or application state
      } else {
        // User is signed out
        console.log("User is signed out");
        // Redirect to login page or update UI accordingly
      }
    });
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

  return (
    <header className="bg-slate-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Brand */}
        <div className="flex items-center justify-between w-full">
          <NavLink to="/" className="select-none">
            <h1 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 dark:from-teal-300 dark:via-cyan-300 dark:to-blue-300">
              MoodBloom
            </h1>
          </NavLink>

          {/* Desktop Nav */}
          {uid && (
            <nav className=" sm:flex space-x-4 items-center hidden">
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
            </nav>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-md text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 transition"
          aria-label="Toggle Mobile Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        <button
          onClick={toggleDarkMode}
          aria-label="Toggle Dark Mode"
          className="p-2 rounded-md text-cyan-500 dark:text-cyan-400 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition"
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
      </div>

      {/* Mobile Nav Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-100 dark:bg-gray-900 border-t border-slate-200 dark:border-gray-800 px-4 pb-4 space-y-2">
          <NavLink
            to="/journal"
            className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-gray-800"
            onClick={() => setMobileMenuOpen(false)}
          >
            Journal
          </NavLink>
          <NavLink
            to="/cookiejar"
            className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-gray-800"
            onClick={() => setMobileMenuOpen(false)}
          >
            Cookie Jar
          </NavLink>
          {/* <button
            onClick={() => {
              toggleDarkMode();
              setMobileMenuOpen(false);
            }}
            className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-gray-800"
          >
            Toggle {darkMode ? "Light" : "Dark"} Mode
          </button> */}
        </div>
      )}
    </header>
  );
}
