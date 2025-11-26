import { commonLightVars, commonDarkVars } from "./common";

const lightPurple = {
  theme: {},
  light: {
    background: "#FBFCFF",
    "primary-50": "#EAB5ED",
    "primary-100": "#DAA0E5",
    "primary-200": "#CA8BDD",
    "primary-300": "#AA61CD",
    "primary-400": "#7A22B5",
    "primary-500": "#6A0DAD",
    "primary-600": "#4C0B7C",
    "primary-700": "#440B6D",
    "primary-800": "#370958",
    "primary-900": "#2A0743",
    "primary-950": "#200533",

    ...commonLightVars,
  },
  dark: {
    background: "#200533",
    "primary-50": "#2A0743",
    "primary-100": "#370958",
    "primary-200": "#440B6D",
    "primary-300": "#4C0B7C",
    "primary-400": "#6A0DAD",
    "primary-500": "#7A22B5",
    "primary-600": "#AA61CD",
    "primary-700": "#CA8BDD",
    "primary-800": "#DAA0E5",
    "primary-900": "#EAB5ED",
    "primary-950": "#FBFCFF",

    ...commonDarkVars,
  },
};

export default lightPurple;
