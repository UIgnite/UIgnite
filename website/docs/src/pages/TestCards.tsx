import {Button, ThemeToggleBtn, useTheme} from '@pkgs/uignite';

const TestCards = () => {
  const {theme} = useTheme();
  return (
    <div>
      <div className="my-24 border"></div>

      <div
        className="relative px-4 sm:px-6 lg:px-8 flex py-1 mx-auto flex-row items-center justify-between
    h-14 top-0 w-full border-b  border-gray-200
    "
      >
        {/* logo */}
        <div className="flex flex-row gap-12 items-center justify-between text-[1rem] lg:justify-start">
          <img
            src={`${theme === 'light' ? '/chaicode-black.png' : '/chaicode-white.png'}`}
            className="size-32 object-contain"
            alt="Logo"
          />

          {/* nav links */}
          <nav className="hidden sm:flex sm:justify-end sm:space-x-2">
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
    </div>
  );
};

export default TestCards;
