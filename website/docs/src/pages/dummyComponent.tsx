import {ThemeToggleBtn, useTheme, Button} from '@pkgs/uignite';
import {NavLink} from 'react-router-dom';
import {ReactNode} from 'react';
import {cn} from '@pkgs/uignite';
import {Menu, X} from 'lucide-react';
import {useState} from 'react';

export interface NavbarProps {
  darkModeLogo: string;
  lightModoLogo: string;
  navbarLinks: {
    name: string;
    link: string;
  }[];
  themeChangeBtn?: ReactNode;
  loginBtnLink?: string;
  className?: string;
}

export const Navbar = ({
  darkModeLogo,
  lightModoLogo,
  navbarLinks,
  themeChangeBtn,
  loginBtnLink,
  className,
}: NavbarProps) => {
  const {theme} = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <header
      className={cn(
        'bg-zinc-100 dark:bg-zinc-800 w-full px-4 py-2 sm:px-6 lg:px-10 shadow-sm',
        className
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo + Nav */}
        <div className="flex items-center gap-6">
          <img
            src={theme === 'light' ? lightModoLogo : darkModeLogo}
            alt="Logo"
            className="h-10 object-contain"
          />

          {/* Desktop Links */}
          <nav className="hidden md:flex gap-4 items-center">
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

        {/* Right: Theme toggle + login + hamburger */}
        <div className="flex items-center gap-3">
          {themeChangeBtn ?? <ThemeToggleBtn />}

          {/* Login: Desktop only */}
          {loginBtnLink && (
            <NavLink to={loginBtnLink} className="hidden md:block">
              <Button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 text-sm">
                Login
              </Button>
            </NavLink>
          )}

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
          {loginBtnLink && (
            <NavLink
              to={loginBtnLink}
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
          )}
        </nav>
      )}
    </header>
  );
};
export default Navbar;

/*




<Button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 text-sm">
                Login
              </Button>
*/
