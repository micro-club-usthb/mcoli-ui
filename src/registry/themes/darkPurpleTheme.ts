import { commonLightVars, commonDarkVars } from "./common";

const darkPurple = {
  theme: {},
  light: {
    background: "#A488F7",
    "primary-50": "#8F69FD",
    "primary-100": "#7547FD",
    "primary-200": "#6634FD",
    "primary-300": "#5620F7",
    "primary-400": "#4516D1",
    "primary-500": "#3910B4",
    "primary-600": "#300D9A",
    "primary-700": "#270A7F",
    "primary-800": "#1B065A",
    "primary-900": "#160548",
    "primary-950": "#0D022E",

    ...commonLightVars,
  },
  dark: {
    background: "#0D022E",
    "primary-50": "#160548",
    "primary-100": "#1B065A",
    "primary-200": "#270A7F",
    "primary-300": "#300D9A",
    "primary-400": "#3910B4",
    "primary-500": "#4516D1",
    "primary-600": "#5620F7",
    "primary-700": "#6634FD",
    "primary-800": "#7547FD",
    "primary-900": "#8F69FD",
    "primary-950": "#A488F7",

    ...commonDarkVars,
  },
};

export default darkPurple;
