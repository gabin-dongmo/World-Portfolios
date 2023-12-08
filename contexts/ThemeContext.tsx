import React, { createContext, useEffect, useRef, useState } from 'react';
import { Theme } from '@/components/Icons';

export const ThemeContext = createContext({
  theme: 'light' as Theme,
  toggleTheme: () => {}
});

export const ThemeProvider = ({ children }: {
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = useState<Theme>('light');
  localStorage.setItem('theme', theme);
  const bodyElement = useRef<HTMLElement>(null!);

  useEffect(() => {
    bodyElement.current = document.body;
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    if (theme === 'light') {
      bodyElement.current.classList.remove('dark');
      bodyElement.current.classList.add('light');
    } else {
      bodyElement.current.classList.remove('light');
      bodyElement.current.classList.add('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};