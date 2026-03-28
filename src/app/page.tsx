import { ModeToggle } from "@/components/ModeToggle";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import BackgroundBlur from "@/components/sections/BackgroundBlur";
import Blur from "@/components/sections/Blur";
import BorderRadius from "@/components/sections/BorderRadius";
import Colors from "@/components/sections/Colors";
import Hero from "@/components/sections/Hero";
import Shadow from "@/components/sections/Shadow";
import { Showcase } from "@/components/sections/Showcase";
import Stroke from "@/components/sections/Stroke";
import TextStyles from "@/components/sections/TextStyles";
import Link from "next/link";
import Logo from "@/components/Logo";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background text-foreground">
      {/* Sticky Glassmorphic Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg supports-backdrop-filter:bg-background/60">
        <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-8">
          <Link href="/" className="transition-opacity hover:opacity-80">
            <Logo />
          </Link>
          <div className="flex items-center gap-3">
            <ThemeSwitcher />
            <ModeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 md:px-10 xl:px-16 py-20 flex flex-col items-center gap-24">
        <Hero />
        <Showcase />
        <Colors />
        <TextStyles />
        <Shadow />
        <Stroke />
        <BorderRadius />
        <Blur />
        <BackgroundBlur />
      </main>
    </div>
  );
}
