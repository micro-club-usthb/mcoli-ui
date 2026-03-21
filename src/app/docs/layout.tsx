import * as React from "react";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { source } from "@/lib/source";
import Logo from "@/components/Logo";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      nav={{
        title: <Logo />,
        transparentMode: "top",
        children: (
          <div className="mr-1">
            <ThemeSwitcher />
          </div>
        ),
      }}
    >
      {children}
    </DocsLayout>
  );
}
