import type { Metadata } from "next";
import { RootProvider } from "fumadocs-ui/provider/next";
import { ColorThemeProvider } from "@/components/ColorThemeProvider";
import "./globals.css";
import { DM_Sans, Plus_Jakarta_Sans, Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const plusJakartaSansPlusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

const dmSansDmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Mcoli UI – Micro Club UI Components Library",
  description:
    "Official React UI component library by Micro Club. Reusable, accessible, and customizable components for modern web apps. Built with Next.js and shadcn/ui. Documented and showcased using Fumadocs.",
  keywords: [
    "Mcoli UI",
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
    title: "Mcoli UI – Micro Club UI Components Library",
    description:
      "Reusable, accessible, and customizable React components for modern web applications. Built with Next.js and shadcn/ui. Documented and showcased using Fumadocs.",
    url: "https://github.com/MicroClub-USTHB/mcoli-ui",
    siteName: "Mcoli UI",
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
            , "font-sans", geist.variable)}
    >
      <head>
        {/* SSR Flash Prevention Script */}
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var theme = localStorage.getItem('mcoli-ui-color-theme') || 'primary';
                document.documentElement.setAttribute('data-theme', theme);
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={`antialiased`}>
        <ColorThemeProvider>
          <RootProvider>{children}</RootProvider>
        </ColorThemeProvider>
      </body>
    </html>
  );
}
