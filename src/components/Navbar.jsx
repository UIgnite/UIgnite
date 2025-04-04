import React, { useState } from "react";
import logo from "../assets/image.jpg";
import githubIcon from "../assets/GL.png";
import themeIcon from "../assets/light.png";

const Navbar = () => {
  const [isDark, setIsDark] = useState(true); 

  return (
    <nav
      className={`flex items-center justify-between p-4 shadow-lg transition-all duration-300 ${
        isDark ? "bg-[#0f0f0f] text-white" : "bg-[#f7f7f7] text-black"
      }`}
    >
      {/* Logo Section */}
      <div className="flex items-center">
        <img src={logo} alt="UIgnite Logo" className="h-10 w-auto" />
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-8">
        <li>
          <a
            href="/"
            className={`rounded-full px-4 py-2 font-semibold transition duration-300 ${
              isDark
                ? "bg-gray-700 hover:bg-gray-600"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/docs"
            className="font-semibold hover:text-gray-300 transition duration-300"
          >
            Docs
          </a>
        </li>
        <li>
          <a
            href="/components"
            className="font-semibold hover:text-gray-300 transition duration-300"
          >
            Components
          </a>
        </li>
        <li>
          <a
            href="/team"
            className="font-semibold hover:text-gray-300 transition duration-300"
          >
            Team
          </a>
        </li>
      </ul>

      {/* Icons Section */}
      <div className="flex items-center space-x-4">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" className="h-6 w-6" />
        </a>
        <button
          className="focus:outline-none"
          onClick={() => setIsDark(!isDark)}
        >
          <img src={themeIcon} alt="Theme Toggle" className="h-6 w-6" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
