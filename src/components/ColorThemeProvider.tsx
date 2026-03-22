"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type ThemePalette =
  | "primary"
  | "secondary"
  | "game-dev"
  | "robotics"
  | "it";

interface ThemeContextType {
  colorTheme: ThemePalette;
  setColorTheme: (theme: ThemePalette) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  colorTheme: "primary",
  setColorTheme: () => null,
});

export function ColorThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [colorTheme, setColorThemeState] = useState<ThemePalette>("primary");

  // Load the saved theme on mount
  useEffect(() => {
    const stored =
      (localStorage.getItem("mcoli-ui-color-theme") as ThemePalette) || "primary";
    setColorThemeState(stored);
  }, []);

  const setColorTheme = (theme: ThemePalette) => {
    setColorThemeState(theme);
    localStorage.setItem("mcoli-ui-color-theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  };

  // We always render the Provider to keep the React tree stable and prevent script injection errors
  return (
    <ThemeContext.Provider value={{ colorTheme, setColorTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useColorTheme = () => useContext(ThemeContext);
