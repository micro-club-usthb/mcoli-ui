import type { Registry } from "shadcn/schema";
import createTheme from "./themes/utils";

// Generate themes using the helper function
export const themes: Registry["items"] = [
  createTheme(
    "primary",
    "Primary",
    "A theme based on the Primary color palette.",
  ),
  createTheme(
    "light-purple",
    "Light Purple",
    "A light purple themed color palette.",
  ),
  createTheme(
    "dark-purple",
    "Dark Purple",
    "A dark purple themed color palette.",
  ),
];
