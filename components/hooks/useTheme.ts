import { createContext, useEffect, useRef, useState } from "react";

export type Theme = "light" | "dark";
const localStorageThemeKey = "world-portfolio-app-theme";
createContext({
  theme: "light" as Theme,
  toggleTheme: () => {},
});
const useTheme = () => {
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

  return {
    theme,
    toggleTheme,
  };
};

export default useTheme;
