import type { Metadata } from "next";
import { RootProvider } from "fumadocs-ui/provider/next";
import "./globals.css";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import { cn } from "@/lib/utils";

const plusJakartaSansPlusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

const dmSansDmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "MC UI – Micro Club UI Components Library",
  description:
    "Official React UI component library by Micro Club. Reusable, accessible, and customizable components for modern web apps. Built with Next.js and shadcn/ui. Documented and showcased using Fumadocs.",
  keywords: [
    "MC UI",
    "Micro Club",
    "UI components",
    "React",
    "Next.js",
    "shadcn/ui",
    "Component Library",
    "Web Development",
    "Documentation",
    "Fumadocs",
  ],
  authors: [{ name: "Micro Club" }],
  openGraph: {
    title: "MC UI – Micro Club UI Components Library",
    description:
      "Reusable, accessible, and customizable React components for modern web applications. Built with Next.js and shadcn/ui. Documented and showcased using Fumadocs.",
    url: "https://github.com/MicroClub-USTHB/mc-ui",
    siteName: "MC UI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        dmSansDmSans.variable,
        plusJakartaSansPlusJakartaSans.variable,
      )}
    >
      <body className={`antialiased`}>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
