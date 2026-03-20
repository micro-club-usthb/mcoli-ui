import type { Registry } from "shadcn/schema";
import createTheme from "./themes/utils";

export const themes: Registry["items"] = [
  createTheme(
    "primary",
    "Primary",
    "Blue Primary with Purple Secondary accents - Professional and modern.",
  ),
  createTheme(
    "secondary",
    "Secondary",
    "Purple Secondary with Blue Primary accents - Creative and bold.",
  ),
  createTheme(
    "game-dev",
    "GameDev",
    "Pink Primary with Yellow accents - Vibrant and energetic for gaming.",
  ),
  createTheme(
    "robotics",
    "Robotics",
    "Blue Primary with Accent Blue accents - Technical and precise.",
  ),
  createTheme(
    "it",
    "IT",
    "Green Primary with Gray accents - Clean and professional for IT.",
  ),
];
