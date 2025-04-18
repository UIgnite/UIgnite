import {Link, NavLink, useLocation} from 'react-router-dom';
import {ThemeToggleBtn} from '@pkgs/uignite';
import {GitHubLogoIcon} from '@radix-ui/react-icons';
import SearchBar from '../pages/components/Search';
import {useEffect} from 'react';

const Navbar = () => {
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="relative max-w-[88rem] px-4 sm:px-6 lg:px-8 flex flex-col w-full py-5 mx-auto md:flex-row md:items-center md:justify-between">
      {/* logo */}
      <div className="flex flex-row gap-12 items-center justify-between text-[1rem] lg:justify-start">
        <Link to="/" className="flex items-center gap-2">
          <div>
            <img
              src="/light-mode-logo.png"
              alt="Light Logo"
              className="block dark:hidden w-32 -mt-2 object-contain"
            />
            <img
              src="/dark-mode-logo.png"
              alt="Dark Logo"
              className="hidden dark:block w-32 -mt-2 object-contain"
            />
          </div>
        </Link>

        {/* nav links */}
        <nav className="flex justify-end space-x-2">
          <NavLink
            to="/"
            className="cursor-pointer p-2 rounded opacity-70 hover:opacity-100"
          >
            <p>Home</p>
          </NavLink>
          <NavLink
            to="/components/Accordion"
            className="cursor-pointer p-2 rounded opacity-70 hover:opacity-100"
          >
            <p>Docs</p>
          </NavLink>
          <NavLink
            to="/pricing"
            className="cursor-pointer p-2 rounded opacity-70 hover:opacity-100"
          >
            <p>Pricing</p>
          </NavLink>

          <NavLink
            to="/about"
            className="cursor-pointer p-2 rounded opacity-70 hover:opacity-100"
          >
            <p>About Us</p>
          </NavLink>

          <NavLink
            to="/feedback"
            className="cursor-pointer p-2 rounded opacity-70 hover:opacity-100"
          >
            <p>Feedback</p>
          </NavLink>
          {/* <NavLink
            to="/components"
            className="cursor-pointer p-2 rounded opacity-70 hover:opacity-100"
          >
            <p>Components</p>
          </NavLink> */}
        </nav>
      </div>
      {/* github and mode switch */}
      <div className="hidden md:flex md:justify-center md:items-center md:gap-10">
        {/* md:justify-end md:space-x-4 */}
        <SearchBar />
        <div className="flex gap-1.5">
          <ThemeToggleBtn />
          <a
            href="https://github.com/UIgnite/UIgnite"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="!dark cursor-pointer p-2 rounded dark:bg-zinc-800  dark:hover:bg-zinc-700 bg-zinc-100 hover:bg-zinc-200">
              <GitHubLogoIcon className=" h-4 w-4 " />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
