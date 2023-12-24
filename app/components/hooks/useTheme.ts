import { createContext, useEffect, useRef, useState } from "react";
import useLocalStorage from "@/app/components/hooks/useLocalStorage";

export type Theme = "light" | "dark";
const localStorageThemeKey = "world-portfolio-app-theme";
createContext({
  theme: "light" as Theme,
  toggleTheme: () => {},
});
const useTheme = () => {
  const [storedTheme, storeTheme] = useLocalStorage<Theme>(
    localStorageThemeKey,
    "light",
  );
  const [currentTheme, setCurrentTheme] = useState<Theme>(storedTheme);
  const bodyElement = useRef<HTMLElement>(null!);

  useEffect(() => {
    bodyElement.current = document.body;
    if (storedTheme) {
      updateTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    if (currentTheme === "light") {
      bodyElement.current.classList.remove("dark");
      bodyElement.current.classList.add("light");
    } else {
      bodyElement.current.classList.remove("light");
      bodyElement.current.classList.add("dark");
    }
  }, [currentTheme]);

  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    updateTheme(newTheme);
  };

  const updateTheme = (newTheme: Theme) => {
    setCurrentTheme(newTheme);
    storeTheme(newTheme);
  };

  return {
    theme: currentTheme,
    toggleTheme,
  };
};

export default useTheme;
