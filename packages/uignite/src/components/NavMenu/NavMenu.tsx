import React from 'react';

export interface NavMenuProps {
  items: string[];
}

// Dropdown Component
const Dropdown: React.FC<{label: string}> = ({label}) => {
  const defaultContent: Record<string, string[]> = {
    home: ['GitHub', 'Docs & Setup Guide'],
    resources: ['React + Tailwind Guide', 'Advanced UI Components'],
    about: ['About Team', 'Meet Developers'],
  };

  const links = defaultContent[label.toLowerCase()] || [
    'Default Link 1',
    'Default Link 2',
  ];

  return (
    <div className="absolute bg-gray-800 text-white p-3 rounded-md shadow-lg transition-all duration-300 ease-in-out mt-4 z-50 min-w-max max-w-md overflow-x-auto left-1/2 transform -translate-x-1/2">
      <ul>
        {links.map((link, idx) => (
          <li key={idx}>
            <a href="#" className="hover:text-cyan-300 transition duration-200">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

// NavMenu Component
const NavMenu: React.FC<NavMenuProps> = ({items}) => {
  return (
    <div className="flex justify-center w-full mt-6">
      <nav className="bg-gray-800 px-6 py-2 rounded-full shadow-lg shadow-cyan-500/50">
        <ul className="flex space-x-6 items-center text-cyan-500">
          {items.map((label) => (
            <li key={label} className="relative group">
              <button className="cursor-pointer hover:text-cyan-300 transition duration-200 capitalize">
                {label}
              </button>
              <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition duration-200">
                <Dropdown label={label} />
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavMenu;
