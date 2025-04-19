import {ThemeToggleBtn} from '@/lib/ThemeToggleBtn';
import {useTheme} from '@/hooks';
import {Button} from '../Button';
import {ReactNode} from 'react';

export interface NavbarProps {
  darkModeLogo: string;
  lightModoLogo: string;
  navbarLinks: [
    {
      name: string;
      link: string;
    },
  ];
  themeChangeBtn?: ReactNode;
  loginBtnLink?: string;
}

const Navbar = () => {
  const {theme} = useTheme();
  return (
    <div
      className="bg-zinc-100 rounded-sm dark:bg-zinc-800 relative flex py-1 mx-auto flex-row items-center justify-between
    h-14 top-0 w-full sm:min-w-[650px] px-4"
    >
      {/* logo */}
      <div className="flex flex-row gap-12 items-center justify-between text-[1rem] lg:justify-start">
        <img
          src={`${theme === 'light' ? '/chaicode-black.png' : '/chaicode-white.png'}`}
          className="size-32 object-contain"
          alt="Logo"
        />

        {/* nav links */}
        <nav className="flex justify-between">
          <a
            href="#"
            className="cursor-pointer p-2 rounded opacity-70 hover:opacity-100"
          >
            <p>Cohorts</p>
          </a>
          <a
            href="#"
            className="cursor-pointer p-2 rounded opacity-70 hover:opacity-100"
          >
            <p>Udemy</p>
          </a>
          <a
            href="#"
            className="cursor-pointer p-2 rounded opacity-70 hover:opacity-100"
          >
            <p>Docs</p>
          </a>
          <a
            href="#"
            className="cursor-pointer p-2 rounded opacity-70 hover:opacity-100"
          >
            <p>Reviews</p>
          </a>
        </nav>
      </div>

      {/* github and mode switch */}
      <div className="flex justify-center items-center gap-1">
        <div className="">
          <ThemeToggleBtn />
        </div>
        <Button className="ml-2 size-9 bg-orange-500 hover:bg-orange-600">
          Login
        </Button>
      </div>
    </div>
  );
};

export {Navbar};
