import {Navbar, ThemeToggleBtn} from '@pkgs/uignite';

const TestCards = () => {
  return (
    <div>
      <Navbar
        className=""
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
    </div>
  );
};

export default TestCards;
