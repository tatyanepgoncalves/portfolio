import { createContext, useEffect, useState, useContext } from 'react';


const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [ theme, setTheme ] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light" ))
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );

}

export const useTheme = () => useContext(ThemeContext);