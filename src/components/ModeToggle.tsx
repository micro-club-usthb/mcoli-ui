"use client";

import * as React from "react";
import { Check, Laptop, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full shadow-sm hover:border-primary/50 transition-all focus-visible:ring-offset-0"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90 text-primary" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0 text-primary" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40 rounded-xl shadow-lg">
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="flex items-center justify-between cursor-pointer rounded-lg my-0.5"
        >
          <div className="flex items-center gap-2.5">
            <Sun className="size-4 text-muted-foreground" />
            <span
              className={
                mounted && theme === "light"
                  ? "font-semibold"
                  : "font-medium text-muted-foreground"
              }
            >
              Light
            </span>
          </div>
          {mounted && theme === "light" && (
            <Check className="size-4 text-primary" />
          )}
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="flex items-center justify-between cursor-pointer rounded-lg my-0.5"
        >
          <div className="flex items-center gap-2.5">
            <Moon className="size-4 text-muted-foreground" />
            <span
              className={
                mounted && theme === "dark"
                  ? "font-semibold"
                  : "font-medium text-muted-foreground"
              }
            >
              Dark
            </span>
          </div>
          {mounted && theme === "dark" && (
            <Check className="size-4 text-primary" />
          )}
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="flex items-center justify-between cursor-pointer rounded-lg my-0.5"
        >
          <div className="flex items-center gap-2.5">
            <Laptop className="size-4 text-muted-foreground" />
            <span
              className={
                mounted && theme === "system"
                  ? "font-semibold"
                  : "font-medium text-muted-foreground"
              }
            >
              System
            </span>
          </div>
          {mounted && theme === "system" && (
            <Check className="size-4 text-primary" />
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
