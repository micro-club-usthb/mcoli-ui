import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { RootProvider } from "fumadocs-ui/provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
