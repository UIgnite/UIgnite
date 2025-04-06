import React, { useState, useEffect } from "react";
import { useTheme } from "../hooks/theme";

const Navbar = ({
  lightLogo,
  darkLogo,
  lightGithub,
  darkGithub,
  lightThemeIcon,
  darkThemeIcon,
  navLinks = [], // expects [{ label: "Home", href: "#home" }, ...]
}) => {
  // Get theme from localStorage on mount
 const{theme,toggleTheme} = useTheme();

  const [selectedNav, setSelectedNav] = useState(navLinks[0]?.label || "");
  const isDark = theme === "dark";

  const getNavClass = (label) => {
    const isSelected = selectedNav === label;

    if (isSelected) {
      return `rounded-full px-4 py-2 font-semibold transition duration-300 ${
        isDark
          ? "bg-gray-700 hover:bg-gray-600 border-2 border-solid border-white shadow-[0_1px_50px_rgba(255,255,255,0.4)]"
          : "bg-gray-300 hover:bg-gray-400 border-2 border-solid"
      }`;
    } else {
      return `rounded-full px-4 py-2 font-semibold transition duration-300 ${
        isDark ? "hover:text-gray-300" : "hover:text-gray-700"
      }`;
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between p-4 shadow-lg transition-all z-50 px-6 ${
        isDark ? "bg-[#0f0f0f] text-white btn-gradient-1" : "bg-[#f7f7f7] text-black border-black btn-gradient-2"
      }`}
    >
      {/* Logo Section */}
      <div className="flex items-center">
        <img src={isDark ? darkLogo : lightLogo} alt="Logo" className="h-10 w-auto" />
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-5">
        {navLinks.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              className={getNavClass(label)}
              onClick={() => setSelectedNav(label)}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Icons Section */}
      <div className="flex items-center space-x-4">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <img
            src={isDark ? darkGithub : lightGithub}
            alt="GitHub"
            className="h-6 w-6"
          />
        </a>

        <button className="focus:outline-none" onClick={toggleTheme}>
          <img
            src={isDark ? darkThemeIcon : lightThemeIcon}
            alt="Theme Toggle"
            className="h-6 w-6"
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
