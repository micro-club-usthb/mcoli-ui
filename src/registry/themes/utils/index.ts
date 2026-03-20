import { Registry } from "shadcn/schema";
import primaryTheme from "../primaryTheme";
import secondaryTheme from "../secondaryTheme";
import gameDevTheme from "../gameDevTheme";
import roboticsTheme from "../roboticsTheme";
import itTheme from "../itTheme";
import { commonCSS, themeInlineCSS } from "../common";

const themeVars = {
  primary: primaryTheme,
  secondary: secondaryTheme,
  "game-dev": gameDevTheme,
  robotics: roboticsTheme,
  it: itTheme,
};

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
    cssVars: {
      theme: {},
      light: vars.light,
      dark: vars.dark,
    },
    css: {
      ...commonCSS,
      "@theme inline": themeInlineCSS,
    },
  };
}

export { themeVars };
