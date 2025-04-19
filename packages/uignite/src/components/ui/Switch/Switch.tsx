import {useTheme} from '@/hooks/theme';
import {useState} from 'react';

interface SwitchProps {
  defaultState?: boolean;
  className?: string;
}

export function Switch({defaultState = false}: SwitchProps) {
  const [state, setState] = useState<boolean>(defaultState);
  const {toggleTheme} = useTheme();
  const handleToggle = () => {
    setState(!state);
    toggleTheme();
  };
  return (
    <div
      role="switch"
      tabIndex={0}
      aria-checked={state}
      onClick={handleToggle}
      className={`relative w-12 h-6 rounded-full cursor-pointer transition-colors duration-300 ${
        state ? 'bg-neutral-700' : 'bg-gray-300'
      }`}
    >
      <div
        className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full shadow-md transform transition-transform duration-300 ${
          state ? 'translate-x-6 dark:bg-black bg-white' : 'bg-white'
        }`}
      />
    </div>
  );
}
