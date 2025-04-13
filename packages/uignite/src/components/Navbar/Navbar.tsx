import {Link, NavLink} from 'react-router-dom';
import {GitHubLogoIcon} from '@radix-ui/react-icons';
import { ThemeToggleBtn } from '../../utils/ThemeToggleBtn';

export const Navbar = () => {
  return (
    <div className="relative  max-w-[88rem] px-4 sm:px-6 lg:px-8 flex flex-col w-full py-5 mx-auto md:flex-row md:items-center md:justify-between">
      {/* logo */}
      <div className="flex flex-row gap-12 items-center justify-between text-[1rem] lg:justify-start">
        <Link to="/" className="flex items-center gap-2">
          <img src="/favicon.png" className="w-8 object-contain" alt="Logo" />
          <h4 className="text-2xl font-semibold -mt-1">
            UI<span className="text-primary">gnite</span>
          </h4>
        </Link>

        {/* nav links */}
        <nav className="flex justify-end space-x-2">
          <NavLink
            to="/pricing"
            className="cursor-pointer p-2 rounded opacity-70 hover:opacity-100"
          >
            <p>Docs</p>
          </NavLink>
          <NavLink
            to="/components"
            className="cursor-pointer p-2 rounded opacity-70 hover:opacity-100"
          >
            <p>Components</p>
          </NavLink>
          <NavLink
            to="/"
            className="cursor-pointer p-2 rounded opacity-70 hover:opacity-100"
          >
            <p>About</p>
          </NavLink>
        </nav>
      </div>

      {/* github and mode switch */}
      <div className="hidden md:flex md:justify-center md:items-center md:gap-1">
        {/* md:justify-end md:space-x-4 */}
        <ThemeToggleBtn />
        <a
          href="https://github.com/UIgnite/UIgnite"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="!dark cursor-pointer p-2 rounded hover:bg-zinc-200 dark:hover:bg-zinc-700">
            <GitHubLogoIcon className=" h-4 w-4 " />
          </div>
        </a>
      </div>
    </div>
  );
};
