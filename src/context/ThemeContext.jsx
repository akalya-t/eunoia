import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState({
    bg: "bg-fuchsia-100",
    text: "text-amber-950",
  });

  const applyMoodTheme = (mood) => {
    setTheme({
      bg: mood.theme.bg,
      text: mood.theme.text,
    });
  };

  const resetTheme = () => {
    setTheme({
      bg: "bg-red-50",
      text: "text-amber-950",
    });
  };

  useEffect(() => {
    document.documentElement.className = `${theme.bg} ${theme.text} transition-all duration-300`;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, applyMoodTheme, resetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
