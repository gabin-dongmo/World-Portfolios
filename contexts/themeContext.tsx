import React, { createContext, useEffect, useRef, useState } from "react";
import { Theme } from "@/components/Icons";

const localStorageThemeKey = "world-portfolio-app-theme";
export const ThemeContext = createContext({
  theme: "light" as Theme,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const savedTheme = localStorage.getItem(localStorageThemeKey) as Theme;
  const initialTheme = savedTheme ? savedTheme : "light";
  const [theme, setTheme] = useState<Theme>(initialTheme);
  localStorage.setItem(localStorageThemeKey, theme);
  const bodyElement = useRef<HTMLElement>(null!);

  useEffect(() => {
    bodyElement.current = document.body;
    const savedTheme = localStorage.getItem(localStorageThemeKey) as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    if (theme === "light") {
      bodyElement.current.classList.remove("dark");
      bodyElement.current.classList.add("light");
    } else {
      bodyElement.current.classList.remove("light");
      bodyElement.current.classList.add("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem(localStorageThemeKey, newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
