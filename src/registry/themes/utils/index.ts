import { Registry } from "shadcn/schema";
import { primaryTheme } from "../primaryTheme";
import { secondaryTheme } from "../secondaryTheme";
import { gameDevTheme } from "../gameDevTheme";
import { roboticsTheme } from "../roboticsTheme";
import { itTheme } from "../itTheme";
import { commonCSS, REGISTRY_URL, staticVars } from "@/registry/consts";

type ThemeConfig = {
  theme: { light: Record<string, string>; dark: Record<string, string> };
  title: string;
  description: string;
};

const themeMap: Record<string, ThemeConfig> = {
  primary: {
    theme: primaryTheme,
    title: "Primary",
    description:
      "Blue Primary with Purple Secondary accents - Professional and modern.",
  },
  secondary: {
    theme: secondaryTheme,
    title: "Secondary",
    description:
      "Purple Secondary with Blue Primary accents - Creative and bold.",
  },
  "game-dev": {
    theme: gameDevTheme,
    title: "GameDev",
    description:
      "Pink Primary with Yellow accents - Vibrant and energetic for gaming.",
  },
  robotics: {
    theme: roboticsTheme,
    title: "Robotics",
    description:
      "Blue Primary with Accent Blue accents - Technical and precise.",
  },
  it: {
    theme: itTheme,
    title: "IT",
    description:
      "Green Primary with Gray accents - Clean and professional for IT.",
  },
};

function themeInlineMappings(): Record<string, string> {
  return {
    "--color-blue-primary-50": "var(--blue-primary-50)",
    "--color-blue-primary-100": "var(--blue-primary-100)",
    "--color-blue-primary-200": "var(--blue-primary-200)",
    "--color-blue-primary-300": "var(--blue-primary-300)",
    "--color-blue-primary-400": "var(--blue-primary-400)",
    "--color-blue-primary-500": "var(--blue-primary-500)",
    "--color-blue-primary-600": "var(--blue-primary-600)",
    "--color-blue-primary-700": "var(--blue-primary-700)",
    "--color-blue-primary-800": "var(--blue-primary-800)",
    "--color-blue-primary-900": "var(--blue-primary-900)",
    "--color-blue-primary-950": "var(--blue-primary-950)",
    "--color-purple-secondary-50": "var(--purple-secondary-50)",
    "--color-purple-secondary-100": "var(--purple-secondary-100)",
    "--color-purple-secondary-200": "var(--purple-secondary-200)",
    "--color-purple-secondary-300": "var(--purple-secondary-300)",
    "--color-purple-secondary-400": "var(--purple-secondary-400)",
    "--color-purple-secondary-500": "var(--purple-secondary-500)",
    "--color-purple-secondary-600": "var(--purple-secondary-600)",
    "--color-purple-secondary-700": "var(--purple-secondary-700)",
    "--color-purple-secondary-800": "var(--purple-secondary-800)",
    "--color-gray-50": "var(--gray-50)",
    "--color-gray-100": "var(--gray-100)",
    "--color-gray-200": "var(--gray-200)",
    "--color-gray-300": "var(--gray-300)",
    "--color-gray-400": "var(--gray-400)",
    "--color-gray-500": "var(--gray-500)",
    "--color-gray-600": "var(--gray-600)",
    "--color-gray-700": "var(--gray-700)",
    "--color-gray-800": "var(--gray-800)",
    "--color-gray-850": "var(--gray-850)",
    "--color-gray-900": "var(--gray-900)",
    "--color-gray-950": "var(--gray-950)",
    "--color-pink-50": "var(--pink-50)",
    "--color-pink-100": "var(--pink-100)",
    "--color-pink-200": "var(--pink-200)",
    "--color-pink-300": "var(--pink-300)",
    "--color-pink-400": "var(--pink-400)",
    "--color-pink-500": "var(--pink-500)",
    "--color-cyan-50": "var(--cyan-50)",
    "--color-cyan-100": "var(--cyan-100)",
    "--color-cyan-200": "var(--cyan-200)",
    "--color-yellow-50": "var(--yellow-50)",
    "--color-yellow-100": "var(--yellow-100)",
    "--color-yellow-200": "var(--yellow-200)",
    "--color-yellow-300": "var(--yellow-300)",
    "--color-baby-blue-50": "var(--baby-blue-50)",
    "--color-baby-blue-100": "var(--baby-blue-100)",
    "--color-baby-blue-200": "var(--baby-blue-200)",
    "--color-baby-blue-300": "var(--baby-blue-300)",
    "--color-baby-blue-400": "var(--baby-blue-400)",
    "--color-accent-blue-50": "var(--accent-blue-50)",
    "--color-accent-blue-100": "var(--accent-blue-100)",
    "--color-accent-blue-200": "var(--accent-blue-200)",
    "--color-accent-blue-300": "var(--accent-blue-300)",
    "--color-accent-orange-50": "var(--accent-orange-50)",
    "--color-accent-orange-100": "var(--accent-orange-100)",
    "--color-green-50": "var(--green-50)",
    "--color-green-300": "var(--green-300)",
    "--color-green-400": "var(--green-400)",
    "--color-red-50": "var(--red-50)",
    "--color-red-100": "var(--red-100)",
    "--color-red-200": "var(--red-200)",
    "--color-information-50": "var(--information-50)",
    "--color-information-100": "var(--information-100)",
    "--color-information-200": "var(--information-200)",
    "--color-information-300": "var(--information-300)",
    "--color-information-400": "var(--information-400)",
    "--color-information-500": "var(--information-500)",
    "--color-success": "var(--success)",
    "--color-success-foreground": "var(--success-foreground)",
    "--color-warning": "var(--warning)",
    "--color-warning-foreground": "var(--warning-foreground)",
    "--color-error": "var(--error)",
    "--color-destructive": "var(--destructive)",
    "--color-destructive-foreground": "var(--destructive-foreground)",
    "--color-info": "var(--info)",
    "--color-info-foreground": "var(--info-foreground)",
    "--color-white": "var(--white)",
    "--color-black": "var(--black)",
    "--color-background": "var(--background)",
    "--color-foreground": "var(--foreground)",
    "--color-card": "var(--card)",
    "--color-card-foreground": "var(--card-foreground)",
    "--color-popover": "var(--popover)",
    "--color-popover-foreground": "var(--popover-foreground)",
    "--color-primary": "var(--primary)",
    "--color-primary-foreground": "var(--primary-foreground)",
    "--color-secondary": "var(--secondary)",
    "--color-secondary-foreground": "var(--secondary-foreground)",
    "--color-muted": "var(--muted)",
    "--color-muted-foreground": "var(--muted-foreground)",
    "--color-accent": "var(--accent)",
    "--color-accent-foreground": "var(--accent-foreground)",
    "--color-surface": "var(--surface)",
    "--color-surface-foreground": "var(--surface-foreground)",
    "--color-border": "var(--border)",
    "--color-input": "var(--input)",
    "--color-ring": "var(--ring)",
    "--color-chart-1": "var(--chart-1)",
    "--color-chart-2": "var(--chart-2)",
    "--color-chart-3": "var(--chart-3)",
    "--color-chart-4": "var(--chart-4)",
    "--color-chart-5": "var(--chart-5)",
    "--color-sidebar": "var(--sidebar)",
    "--color-sidebar-foreground": "var(--sidebar-foreground)",
    "--color-sidebar-primary": "var(--sidebar-primary)",
    "--color-sidebar-primary-foreground": "var(--sidebar-primary-foreground)",
    "--color-sidebar-accent": "var(--sidebar-accent)",
    "--color-sidebar-accent-foreground": "var(--sidebar-accent-foreground)",
    "--color-sidebar-border": "var(--sidebar-border)",
    "--color-sidebar-ring": "var(--sidebar-ring)",
  };
}

export default function createTheme(name: string): Registry["items"][number] {
  const config = themeMap[name];
  if (!config) throw new Error(`Unknown theme: ${name}`);

  return {
    name,
    type: "registry:theme",
    title: config.title,
    description: config.description,
    registryDependencies: [
      `${REGISTRY_URL}/r/font-dm-sans.json`,
      `${REGISTRY_URL}/r/font-plus-jakarta-sans.json`,
    ],
    cssVars: {
      theme: {
        ...staticVars,
        ...themeInlineMappings(),
      },
      light: config.theme.light,
      dark: config.theme.dark,
    },
    css: commonCSS,
  };
}
