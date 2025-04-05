import React, { useState, useEffect } from "react";

const Navbar = ({ lightLogo, darkLogo, lightGithub, darkGithub, lightThemeIcon, darkThemeIcon }) => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
    document.body.classList.toggle("dark-mode", isDark);
  }, [isDark]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between p-4 shadow-lg transition-all duration-300 z-50 ${
        isDark ? "bg-[#0f0f0f] text-white" : "bg-[#f7f7f7] text-black"
      }`}
    >
      {/* Logo Section */}
      <div className="flex items-center">
        <img src={isDark ? darkLogo : lightLogo} alt="Logo" className="h-10 w-auto" />
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-8">
        <li>
          <a
            href="/"
            className={`rounded-full px-4 py-2 font-semibold transition duration-300 ${
              isDark
                ? "bg-gray-700 hover:bg-gray-600 border-2 border-solid border-white shadow-[0_1px_90px_rgba(255,255,255,1)]"
                : "bg-gray-300 hover:bg-gray-400 border-2 border-solid"
            }`}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href=""
            className={`font-semibold transition duration-300 ${
              isDark ? "hover:text-gray-300" : "hover:text-gray-700"
            }`}
          >
            Docs
          </a>
        </li>
        <li>
          <a
            href=""
            className={`font-semibold transition duration-300 ${
              isDark ? "hover:text-gray-300" : "hover:text-gray-700"
            }`}
          >
            Components
          </a>
        </li>
        <li>
          <a
            href=""
            className={`font-semibold transition duration-300 ${
              isDark ? "hover:text-gray-300" : "hover:text-gray-700"
            }`}
          >
            Team
          </a>
        </li>
      </ul>

      {/* Icons Section */}
      <div className="flex items-center space-x-4">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <img src={isDark ? darkGithub : lightGithub} alt="GitHub" className="h-6 w-6" />
        </a>

        <button className="focus:outline-none" onClick={() => setIsDark(!isDark)}>
          <img src={isDark ? darkThemeIcon : lightThemeIcon} alt="Theme Toggle" className="h-6 w-6" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
