import {NavLink, useLocation} from 'react-router-dom';
import {cn, Navbar, ThemeToggleBtn, useTheme} from '@pkgs/uignite';
import {useEffect, useState} from 'react';
import {X, Menu} from 'lucide-react';

import {GitHubLogoIcon} from '@radix-ui/react-icons';
import SearchBar from '@/pages/components/Search';

function MainNavbar() {
  const navbarLinks: {
    name: string;
    link: string;
  }[] = [
    {name: 'Docs', link: '/components/Accordion'},
    {name: 'Templates', link: '/templates'},
    {name: 'Pricing', link: '/pricing'},
    {name: 'Our Journey', link: '/journey'},
    {name: 'Feedback', link: '/feedback'},
  ];
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const {theme} = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return pathname !== '/components/Navbar' ? (
    <header className={`w-full py-2 sm:px-6 lg:px-10`}>
      <div className="max-w-7xl mx-auto flex items-center gap-4 sm:justify-between px-3">
        {/* Logo + Nav */}
        <div className="hidden lg:flex gap-4 items-center">
          <NavLink to={'/'}>
            <img
              src={
                theme === 'light'
                  ? 'https://res.cloudinary.com/do2tmd6xp/image/upload/q_70/v1745059611/uignite/myjfxbyt80uuxvkbpjqu.png'
                  : 'https://res.cloudinary.com/do2tmd6xp/image/upload/q_70/v1745059613/uignite/xfj6lgzo51ov1nv6bben.png'
              }
              alt="Logo"
              className="w-32 object-contain cursor-pointer"
            />
          </NavLink>

          {/* Desktop Links */}
          <nav className="mt-1">
            {navbarLinks.map(({name, link}) => (
              <NavLink
                key={name}
                to={link}
                className={({isActive}) =>
                  cn(
                    'text-sm md:text-base px-3 py-2 rounded-md transition-opacity duration-200 opacity-70 hover:opacity-100',
                    isActive &&
                      'opacity-100 font-medium text-zinc-900 dark:text-zinc-100'
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
          className="lg:hidden p-2 rounded hover:bg-zinc-200 dark:hover:bg-zinc-700 transition"
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
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <SearchBar />
          <div className="flex gap-1.5 md:ml-6">
            <ThemeToggleBtn
              className={`${pathname === '/' ? 'dark:bg-transparent' : 'dark:bg-transparent'} cursor-pointer p-2 rounded   dark:hover:bg-zinc-800  hover:bg-zinc-200`}
            />
            <a
            href='https://github.com/UIgnite/UIgnite'
              className={`${pathname === '/' ? 'dark:bg-transparent' : 'dark:bg-transparent'} cursor-pointer p-2 rounded   dark:hover:bg-zinc-800  hover:bg-zinc-200`}
            >
              <GitHubLogoIcon className=" h-4 w-4 " />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <nav className="md:hidden mt-2 flex flex-col gap-1 px-4 pb-4">
          <NavLink
            to={'/'}
            onClick={() => setMobileMenuOpen(false)}
            className={({isActive}) =>
              cn(
                'mt-1 block px-3 py-2 rounded-md text-sm transition hover:bg-zinc-200 dark:hover:bg-zinc-700',
                isActive
                  ? 'font-medium text-zinc-900 dark:text-zinc-100 bg-zinc-200 dark:bg-zinc-700'
                  : 'text-zinc-700 dark:text-zinc-300'
              )
            }
          >
            Home
          </NavLink>
          {navbarLinks.map(({name, link}) => (
            <NavLink
              key={name}
              to={link}
              onClick={() => setMobileMenuOpen(false)}
              className={({isActive}) =>
                cn(
                  'block px-3 py-2 rounded-md text-sm transition hover:bg-zinc-200 dark:hover:bg-zinc-700',
                  isActive
                    ? 'font-medium text-zinc-900 dark:text-zinc-100 bg-zinc-200 dark:bg-zinc-700'
                    : 'text-zinc-700 dark:text-zinc-300'
                )
              }
            >
              {name}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  ) : (
    <Navbar
      className="py-3 bg-transparent dark:bg-transparent"
      darkModeLogo="https://res.cloudinary.com/do2tmd6xp/image/upload/v1745059611/uignite/dtst2deim1sgv2g5dcm6.png"
      lightModoLogo="https://res.cloudinary.com/do2tmd6xp/image/upload/v1745059611/uignite/gzfqtahpfc93ybugfiwr.png"
      navbarLinks={[
        {name: 'Cohorts', link: '/'},
        {name: 'Udemy', link: '/'},
        {name: 'Docs', link: '/'},
        {name: 'Reviews', link: '/'},
      ]}
      loginBtnLink="/login"
      themeChangeBtn={
        <ThemeToggleBtn className="text-gray-200 dark:text-zinc-100 bg-orange-500 dark:bg-orange-500 hover:bg-orange-600 dark:hover:bg-orange-600" />
      }
      loginBtnStyle="h-9 text-gray-200 dark:text-zinc-100 bg-orange-500 dark:bg-orange-500 hover:bg-orange-600 dark:hover:bg-orange-600"
    />
  );
}

export default MainNavbar;
