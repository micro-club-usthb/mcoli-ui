import Link from "next/link";
import { ArrowRight, Copy, Terminal, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";

function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center w-full overflow-hidden text-center">
      {/* 2026 Era Ambient Glow - Reacts to Theme Primary Color */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none -z-10 transition-colors duration-700 ease-in-out" />

      {/* Center Logo with Thematic Glow */}
      <div className="relative mb-8 flex items-center justify-center">
        <Logo size={120} />
      </div>

      {/* Main Heading */}
      <h1 className="max-w-6xl font-extrabold tracking-tighter text-5xl sm:text-6xl md:text-7xl lg:text-[80px] lg:leading-[90px] text-foreground mb-6 font-plus-jakarta-sans z-10">
        Ship professional themed UIs, <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-primary/50">
          faster than ever.
        </span>
      </h1>

      {/* Subtitle */}
      <p className="max-w-3xl text-lg sm:text-xl text-muted-foreground mb-10 font-dm-sans leading-relaxed z-10">
        Mcoli UI is a premium component registry and theming engine. Copy,
        paste, and customize accessible components directly into your
        applications.
      </p>

      {/* Call to Actions */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 w-full sm:w-auto px-4 z-10">
        <Button
          asChild
          size="lg"
          className="w-full sm:w-auto px-8 h-12 text-base shadow-xl shadow-primary/20 transition-all hover:bg-primary/90"
        >
          <Link href="/docs/introduction">
            Get Started <ArrowRight className="ml-2 size-4" />
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="w-full sm:w-auto px-8 h-12 text-base border-border bg-surface/50 backdrop-blur-md hover:bg-accent hover:text-accent-foreground transition-all"
        >
          <a
            href="https://github.com/MicroClub-USTHB/mcoli-ui"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github /> GitHub
          </a>
        </Button>
      </div>

      {/* High-End Terminal CLI Snippet */}
      <div className="max-w-lg w-full rounded-2xl border border-border bg-card overflow-hidden transition-transform duration-300 z-10 flex items-center justify-between p-4 font-mono text-sm sm:text-base text-foreground">
        <span className="flex items-center gap-3">
          <Terminal size={20} />
          <span className="text-primary font-semibold">npx</span>{" "}
          mcoli-ui@latest init
        </span>
        <button className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-md hover:bg-accent">
          <Copy className="size-4" />
        </button>
      </div>
    </section>
  );
}

export default Hero;
