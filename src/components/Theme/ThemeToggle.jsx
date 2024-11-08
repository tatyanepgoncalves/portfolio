import { useTheme } from "./ThemeContext";
import {Moon, Sun } from "lucide-react"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
      
    </button>
  );
}
