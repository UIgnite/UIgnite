import React from "react";

// Dropdown Component
const Dropdown = ({ content }) => {
  return (
    <div
      className="absolute bg-gray-800 text-white p-3 rounded-md shadow-lg transition-all duration-300 ease-in-out mt-4 z-50
        min-w-max max-w-md overflow-x-auto left-1/2 transform -translate-x-1/2"
    >
      {content}
    </div>
  );
};

// Main Navbar
const Navbar = () => {
  const dropdownContent = {
    home: (
      <ul>
        <li>
          <a
            href="https://github.com/rambhardwajj/UIgnite"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-300 transition duration-200"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://github.com/rambhardwajj/UIgnite"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-300 transition duration-200"
          >
            Full Documentation and Setup Guide
          </a>
        </li>
      </ul>
    ),
    resources: (
      <ul>
        <li>
          <a href="#" className="hover:text-cyan-300 transition duration-200">
            Full React + Tailwind + Supabase Guide
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-cyan-300 transition duration-200">
            Advanced UI Components
          </a>
        </li>
      </ul>
    ),
    about: (
      <ul>
        <li>
          <a href="#" className="hover:text-cyan-300 transition duration-200">
            About Our Team
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-cyan-300 transition duration-200">
            Meet the Developers
          </a>
        </li>
      </ul>
    ),
  };

  return (
    <nav className="fixed top-5 z-50 bg-gray-800 px-6 py-2 rounded-full shadow-lg">
      <ul className="flex space-x-6 items-center text-cyan-500">
        {["home", "resources", "about"].map((item) => (
          <li key={item} className="relative group">
            <button className="cursor-pointer hover:text-cyan-500 transition duration-200 capitalize">
              {item}
            </button>
            <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition duration-200">
              <Dropdown content={dropdownContent[item]} />
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
