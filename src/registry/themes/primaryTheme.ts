import { commonLightVars, commonDarkVars } from "./common";

const primaryTheme = {
  theme: {},
  light: {
    background: "#fbfcff",
    "primary-50": "#e5f2ff",
    "primary-100": "#c8e6ff",
    "primary-200": "#87ceff",
    "primary-300": "#55b4ed",
    "primary-400": "#3299d1",
    "primary-500": "#007fb3",
    "primary-600": "#00658f",
    "primary-700": "#004c6d",
    "primary-800": "#00344c",
    "primary-900": "#001e2e",
    "primary-950": "#001722",

    ...commonLightVars,
  },
  dark: {
    background: "#001722",
    "primary-50": "#001e2e",
    "primary-100": "#00344c",
    "primary-200": "#004c6d",
    "primary-300": "#00658f",
    "primary-400": "#007fb3",
    "primary-500": "#3299d1",
    "primary-600": "#55b4ed",
    "primary-700": "#87ceff",
    "primary-800": "#c8e6ff",
    "primary-900": "#e5f2ff",
    "primary-950": "#fbfcff",

    ...commonDarkVars,
  },
};

export default primaryTheme;
