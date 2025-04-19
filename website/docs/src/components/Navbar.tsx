import {NavLink, useLocation} from 'react-router-dom';
import {cn, ThemeToggleBtn, useTheme} from '@pkgs/uignite';
import {useEffect, useState} from 'react';
import {X, Menu} from 'lucide-react';

import {GitHubLogoIcon} from '@radix-ui/react-icons';
import SearchBar from '@/pages/components/Search';

function Navbar() {
  const {pathname} = useLocation();
  const navbarLinks: {
    name: string;
    link: string;
  }[] = [
    {name: 'Docs', link: '/components/Accordion'},
    {name: 'Pricing', link: '/pricing'},
    {name: 'Feedback', link: '/feedback'},
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const {theme} = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className={`w-full py-2 sm:px-6 lg:px-10 shadow-sm`}>
      <div className="max-w-7xl mx-auto flex items-center gap-4 sm:justify-between">
        {/* Logo + Nav */}
        <div className="hidden md:flex gap-4 items-center">
          <NavLink to={'/'}>
            <img
              src={
                theme === 'light'
                  ? 'https://res.cloudinary.com/do2tmd6xp/image/upload/v1745059611/uignite/myjfxbyt80uuxvkbpjqu.png'
                  : 'https://res.cloudinary.com/do2tmd6xp/image/upload/v1745059613/uignite/xfj6lgzo51ov1nv6bben.png'
              }
              alt="Logo"
              className="w-32 object-contain cursor-pointer"
            />
          </NavLink>

          {/* Desktop Links */}
          <nav>
            {navbarLinks.map(({name, link}) => (
              <NavLink
                key={name}
                to={link}
                className={({isActive}) =>
                  cn(
                    'text-sm px-3 py-2 rounded-md transition-opacity duration-200 opacity-70 hover:opacity-100',
                    isActive &&
                      'opacity-100 font-medium text-blue-600 dark:text-blue-400'
                  )
                }
              >
                {name}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 rounded hover:bg-zinc-200 dark:hover:bg-zinc-700 transition"
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? (
            <X className="size-5" />
          ) : (
            <Menu className="size-5" />
          )}
        </button>

        {/* Right: Theme toggle + login + hamburger */}
        <div className="flex items-center gap-3">
          <SearchBar />
          <div className="flex gap-1.5 ml-6">
            <ThemeToggleBtn
              className={`${pathname === '/' ? 'dark:bg-transparent' : 'dark:bg-zinc-800'} cursor-pointer p-2 rounded   dark:hover:bg-[#305CDE] bg-zinc-100 hover:bg-zinc-200`}
            />
            <div
              className={`${pathname === '/' ? 'dark:bg-transparent' : 'dark:bg-zinc-800'} cursor-pointer p-2 rounded   dark:hover:bg-[#305CDE] bg-zinc-100 hover:bg-zinc-200`}
            >
              <GitHubLogoIcon className=" h-4 w-4 " />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <nav className="md:hidden mt-2 flex flex-col gap-1 px-4 pb-4">
          {navbarLinks.map(({name, link}) => (
            <NavLink
              key={name}
              to={link}
              onClick={() => setMobileMenuOpen(false)}
              className={({isActive}) =>
                cn(
                  'block px-3 py-2 rounded-md text-sm transition hover:bg-zinc-200 dark:hover:bg-zinc-700',
                  isActive
                    ? 'font-medium text-blue-600 dark:text-blue-400 bg-zinc-200 dark:bg-zinc-700'
                    : 'text-zinc-700 dark:text-zinc-300'
                )
              }
            >
              {name}
            </NavLink>
          ))}

          {/* Mobile Login link */}

          <NavLink
            to={'/login'}
            onClick={() => setMobileMenuOpen(false)}
            className={({isActive}) =>
              cn(
                'mt-1 block px-3 py-2 rounded-md text-sm transition hover:bg-zinc-200 dark:hover:bg-zinc-700',
                isActive
                  ? 'font-medium text-blue-600 dark:text-blue-400 bg-zinc-200 dark:bg-zinc-700'
                  : 'text-zinc-700 dark:text-zinc-300'
              )
            }
          >
            Login
          </NavLink>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
