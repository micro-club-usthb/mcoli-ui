// Common CSS config
const commonCSS = {
  "@layer base": {
    body: {
      "letter-spacing": "var(--tracking-normal)",
    },
  },
};

// Common theme variables
const commonThemeVars = {
  radius: "0.375rem",
  "tracking-tighter": "calc(var(--tracking-normal) - 0.05em)",
  "tracking-tight": "calc(var(--tracking-normal) - 0.025em)",
  "tracking-wide": "calc(var(--tracking-normal) + 0.025em)",
  "tracking-wider": "calc(var(--tracking-normal) + 0.05em)",
  "tracking-widest": "calc(var(--tracking-normal) + 0.1em)",
  "shadow-opacity": "0.1",
  "shadow-blur": "3px",
  "shadow-spread": "0px",
  "shadow-offset-x": "0",
  "shadow-offset-y": "1px",
  "letter-spacing": "0em",
  spacing: "0.25rem",
  "tracking-normal": "0em",
  "shadow-2xs": "0 1px 3px 0px hsl(0 0% 0% / 0.05)",
  "shadow-xs": "0 1px 3px 0px hsl(0 0% 0% / 0.05)",
  "shadow-sm":
    "0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10)",
  shadow:
    "0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10)",
  "shadow-md":
    "0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 2px 4px -1px hsl(0 0% 0% / 0.10)",
  "shadow-lg":
    "0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 4px 6px -1px hsl(0 0% 0% / 0.10)",
  "shadow-xl":
    "0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 8px 10px -1px hsl(0 0% 0% / 0.10)",
  "shadow-2xl": "0 1px 3px 0px hsl(0 0% 0% / 0.25)",
};

export { commonCSS, commonThemeVars };
