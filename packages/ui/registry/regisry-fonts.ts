import type { Registry } from "shadcn/schema";

const fontDmSans = {
  name: "font-dm-sans",
  type: "registry:font" as const,
  font: {
    family: "DM Sans",
    provider: "google" as const,
    import: "DM_Sans",
    variable: "--font-dm-sans",
    subsets: ["latin"] as string[],
  },
};

const fontPlusJakartaSans = {
  name: "font-plus-jakarta-sans",
  type: "registry:font" as const,
  font: {
    family: "Plus Jakarta Sans",
    provider: "google" as const,
    import: "Plus_Jakarta_Sans",
    variable: "--font-plus-jakarta-sans",
    subsets: ["latin"] as string[],
  },
};

export const fonts: Registry["items"] = [fontDmSans, fontPlusJakartaSans];
