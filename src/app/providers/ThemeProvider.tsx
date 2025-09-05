"use client";

import { useState } from "react";

interface ThemeProviderProps {
  children: React.ReactNode;
}

function ThemeProvider({ children }: ThemeProviderProps) {
  const [isDark, setIsDark] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <div dark-theme={isDark ? "dark" : ""} className="p-4 dark:bg-gray-900">
      {children}
      <button
        className="rounded-md border border-gray-300 bg-white p-2 dark:bg-gray-800 dark:text-white"
        onClick={toggleDarkMode}
      >
        {isDark ? "다크모드 OFF" : "다크모드 ON"}
      </button>
    </div>
  );
}

export default ThemeProvider;
