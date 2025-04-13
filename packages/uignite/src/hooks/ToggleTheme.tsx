import {Moon, Sun} from 'lucide-react';
import {useTheme} from './theme';

export const ThemeToggle = () => {
  const {theme, toggleTheme, test} = useTheme();
  console.log('theme: ', theme);
  toggleTheme();
  test();
  let isDark = theme === 'dark';

  return (
    <button
      className={`!dark cursor-pointer p-2 rounded dark:hover:bg-zinc-700 hover:bg-zinc-200`}
      onClick={() => toggleTheme()}
    >
      {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
};
