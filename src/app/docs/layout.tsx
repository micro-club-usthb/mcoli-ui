import * as React from "react";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { source } from "@/lib/source";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      nav={{
        transparentMode: "top",
        children: (
          <div className="flex items-center mr-2">
            <ThemeSwitcher />
          </div>
        ),
      }}
    >
      {children}
    </DocsLayout>
  );
}
