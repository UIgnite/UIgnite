import {Moon, Sun} from 'lucide-react';
import {useTheme} from '../hooks/theme';
import {cn} from './utils';

type ThemeToggleBtnProps = {
  className?: string;
};

export const ThemeToggleBtn = ({className}: ThemeToggleBtnProps) => {
  const {theme, toggleTheme} = useTheme();

  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        'cursor-pointer p-2 rounded dark:bg-zinc-800 dark:hover:bg-zinc-700 hover:bg-zinc-200',
        className
      )}
    >
      {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
};
