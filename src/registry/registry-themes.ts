import type { Registry } from "shadcn/schema";
import createTheme from "./themes/utils";

export const themes: Registry["items"] = [
  createTheme("primary"),
  createTheme("secondary"),
  createTheme("game-dev"),
  createTheme("robotics"),
  createTheme("it"),
];
