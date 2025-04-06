import { createContext,useContext,useState,useEffect } from "react";

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "dark";  // here i am setting the default theme to dark
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.classList.toggle("dark-mode", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`${theme==="dark" ? " bg-dark-primary text-white" : "bg-light-primary text-black"} `}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);