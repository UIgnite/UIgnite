import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../hooks/theme"; // your custom one
import { Button } from "../Button";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  let isDark = theme === "dark";

  return (
    <button
      className={`cursor-pointer p-2 rounded ${
        // isDark ? "hover:bg-zinc-700" : "hover:bg-zinc-200"
        "hover:bg-zinc-700"
      }`}
      onClick={toggleTheme}
    >
      {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
};

export default ThemeToggle;
