import {ThemeToggleBtn} from '@/lib/ThemeToggleBtn';
import {useTheme} from '@/hooks';
import {Button} from '@/components/ui/Button';
import {ReactNode} from 'react';
import {cn} from '@/lib/utils';
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
  loginBtnStyle?: string;
  loginBtnLink?: string;
  className?: string;
}

export const Navbar = ({
  darkModeLogo,
  lightModoLogo,
  navbarLinks,
  themeChangeBtn,
  loginBtnLink,
  loginBtnStyle,
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
        'bg-zinc-100 dark:bg-zinc-800 w-full px-4 py-2 sm:px-6 lg:px-10 border-b border-b-zinc-200 dark:border-b-zinc-900',
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
              <a
                href={link}
                className="text-sm px-3 py-2 rounded-md transition-opacity duration-200 opacity-70 hover:opacity-100"
              >
                {name}
              </a>
            ))}
          </nav>
        </div>

        {/* Theme toggle + login + hamburger */}
        <div className="flex items-center gap-3">
          {themeChangeBtn ?? <ThemeToggleBtn />}

          {/* Desktop only */}
          {loginBtnLink && (
            <a href={loginBtnLink} className="hidden md:block">
              <Button className={cn('px-4 py-2 text-sm', loginBtnStyle)}>
                Login
              </Button>
            </a>
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
            <a
              key={name}
              href={link}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm transition hover:bg-zinc-200 dark:hover:bg-zinc-700"
            >
              {name}
            </a>
          ))}

          {/* Mobile Login link */}
          {loginBtnLink && (
            <a
              href={loginBtnLink}
              onClick={() => setMobileMenuOpen(false)}
              className="mt-1 block px-3 py-2 rounded-md text-sm transition hover:bg-zinc-200 dark:hover:bg-zinc-700"
            >
              Login
            </a>
          )}
        </nav>
      )}
    </header>
  );
};
export default Navbar;
