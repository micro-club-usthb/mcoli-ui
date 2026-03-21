import type { Registry } from "shadcn/schema";
import createTheme, { fontRegistryItems } from "./themes/utils";

export const themes: Registry["items"] = [
  ...fontRegistryItems,
  createTheme("primary"),
  createTheme("secondary"),
  createTheme("game-dev"),
  createTheme("robotics"),
  createTheme("it"),
];
