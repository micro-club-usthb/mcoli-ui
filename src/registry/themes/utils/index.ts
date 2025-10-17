import { Registry } from "shadcn/schema";
import darkPurple from "../darkPurpleTheme";
import lightPurple from "../lightPurpleTheme";
import primaryTheme from "../primaryTheme";
import { commonCSS, commonThemeVars } from "../common";

const themeVars = {
  primary: primaryTheme,
  "light-purple": lightPurple,
  "dark-purple": darkPurple,
};

// Helper function to create a theme
export default function createTheme(
  name: string,
  title: string,
  description: string,
): Registry["items"][number] {
  const vars = themeVars[name as keyof typeof themeVars];

  return {
    name,
    type: "registry:theme",
    title,
    description,
    css: commonCSS,
    cssVars: {
      theme: {
        ...commonThemeVars,
        ...vars.theme,
      },
      light: vars.light,
      dark: vars.dark,
    },
  };
}
