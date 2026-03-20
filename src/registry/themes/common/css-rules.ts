export const commonCSS = {
  "@layer base": {
    "*": {
      "border-color": "var(--border)",
      "outline-color": "rgb(var(--ring) / 0.5)",
    },
    body: {
      "background-color": "var(--background)",
      color: "var(--foreground)",
      "letter-spacing": "0em",
    },
  },
  "h1, h2, h3, h4, h5, h6": {
    "font-family": "var(--font-plus-jakarta-sans)",
  },
  ".header-xl": {
    "font-size": "72px",
    "line-height": "90px",
    "letter-spacing": "-0.02em",
  },
  ".header-lg": {
    "font-size": "60px",
    "line-height": "72px",
    "letter-spacing": "-0.02em",
  },
  ".header-md": {
    "font-size": "36px",
    "line-height": "44px",
    "letter-spacing": "-0.02em",
  },
  ".header-sm": {
    "font-size": "30px",
    "line-height": "38px",
  },
  ".header-xs": {
    "font-size": "24px",
    "line-height": "32px",
  },
  ".paragraph-xl": {
    "font-size": "20px",
    "line-height": "30px",
  },
  ".paragraph-lg": {
    "font-size": "18px",
    "line-height": "28px",
  },
  ".paragraph-md": {
    "font-size": "16px",
    "line-height": "24px",
  },
  ".paragraph-sm": {
    "font-size": "14px",
    "line-height": "20px",
  },
  ".paragraph-xs": {
    "font-size": "12px",
    "line-height": "18px",
  },
};

export const themeInlineCSS = `
@theme inline {
  --color-primary-50: var(--primary-50);
  --color-primary-100: var(--primary-100);
  --color-primary-200: var(--primary-200);
  --color-primary-300: var(--primary-300);
  --color-primary-400: var(--primary-400);
  --color-primary-500: var(--primary-500);
  --color-primary-600: var(--primary-600);
  --color-primary-700: var(--primary-700);
  --color-primary-800: var(--primary-800);
  --color-primary-900: var(--primary-900);
  --color-primary-950: var(--primary-950);

  --color-secondary-50: var(--secondary-50);
  --color-secondary-100: var(--secondary-100);
  --color-secondary-200: var(--secondary-200);
  --color-secondary-300: var(--secondary-300);
  --color-secondary-400: var(--secondary-400);
  --color-secondary-500: var(--secondary-500);
  --color-secondary-600: var(--secondary-600);
  --color-secondary-700: var(--secondary-700);
  --color-secondary-800: var(--secondary-800);
  --color-secondary-900: var(--secondary-900);
  --color-secondary-950: var(--secondary-950);

  --color-gray-50: var(--gray-50);
  --color-gray-100: var(--gray-100);
  --color-gray-200: var(--gray-200);
  --color-gray-300: var(--gray-300);
  --color-gray-400: var(--gray-400);
  --color-gray-500: var(--gray-500);
  --color-gray-600: var(--gray-600);
  --color-gray-700: var(--gray-700);
  --color-gray-800: var(--gray-800);
  --color-gray-850: var(--gray-850);
  --color-gray-900: var(--gray-900);
  --color-gray-950: var(--gray-950);

  --color-pink-50: var(--pink-50);
  --color-pink-100: var(--pink-100);
  --color-pink-200: var(--pink-200);
  --color-pink-300: var(--pink-300);
  --color-pink-400: var(--pink-400);
  --color-pink-500: var(--pink-500);

  --color-cyan-50: var(--cyan-50);
  --color-cyan-100: var(--cyan-100);
  --color-cyan-200: var(--cyan-200);

  --color-yellow-50: var(--yellow-50);
  --color-yellow-100: var(--yellow-100);
  --color-yellow-200: var(--yellow-200);
  --color-yellow-300: var(--yellow-300);

  --color-baby-blue-50: var(--baby-blue-50);
  --color-baby-blue-100: var(--baby-blue-100);
  --color-baby-blue-200: var(--baby-blue-200);
  --color-baby-blue-300: var(--baby-blue-300);
  --color-baby-blue-400: var(--baby-blue-400);

  --color-accent-blue-50: var(--accent-blue-50);
  --color-accent-blue-100: var(--accent-blue-100);
  --color-accent-blue-200: var(--accent-blue-200);
  --color-accent-blue-300: var(--accent-blue-300);

  --color-accent-orange-50: var(--accent-orange-50);
  --color-accent-orange-100: var(--accent-orange-100);

  --color-green-50: var(--green-50);
  --color-green-300: var(--green-300);
  --color-green-400: var(--green-400);

  --color-red-50: var(--red-50);
  --color-red-100: var(--red-100);
  --color-red-200: var(--red-200);

  --color-information-50: var(--information-50);
  --color-information-100: var(--information-100);
  --color-information-200: var(--information-200);
  --color-information-300: var(--information-300);
  --color-information-400: var(--information-400);
  --color-information-500: var(--information-500);

  --color-success: var(--success);
  --color-success-foreground: var(--success-foreground);
  --color-warning: var(--warning);
  --color-warning-foreground: var(--warning-foreground);
  --color-error: var(--error);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-info: var(--info);
  --color-info-foreground: var(--info-foreground);

  --color-white: var(--white);
  --color-black: var(--black);

  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-surface: var(--surface);
  --color-surface-foreground: var(--surface-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);

  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);

  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);

  --radius-sm: var(--radius-sm);
  --radius-md: var(--radius-md);
  --radius-lg: var(--radius-lg);
  --radius-xl: var(--radius-xl);
  --radius-2xl: var(--radius-2xl);

  --shadow-xs: var(--shadow-xs);
  --shadow-sm: var(--shadow-sm);
  --shadow-md: var(--shadow-md);
  --shadow-lg: var(--shadow-lg);
  --shadow-xl: var(--shadow-xl);
  --shadow-2xl: var(--shadow-2xl);
  --shadow-3xl: var(--shadow-3xl);

  --blur-sm: var(--blur-sm);
  --blur-md: var(--blur-md);
  --blur-lg: var(--blur-lg);
  --blur-xl: var(--blur-xl);
}
`;
