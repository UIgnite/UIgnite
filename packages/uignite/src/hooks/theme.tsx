import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';

export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme():any ;
  test():any;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  toggleTheme: () => {},
  test:()=>{}
});

export interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    return savedTheme ?? 'dark';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    console.log("Toggle clicked")
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const test = ()=>{
    console.log("Test clicked")
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme,test}}>
      <div
        className={`${
          theme === 'dark'
            ? 'bg-dark-primary text-white'
            : 'bg-light-primary text-black'
        }`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
