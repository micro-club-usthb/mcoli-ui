import {
  AlertCircle,
  AlertTriangle,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  Info,
  LayoutTemplate,
  MousePointerClick,
  PanelLeftClose,
  Search,
  Settings,
  ShieldAlert,
} from "lucide-react";

export function Showcase() {
  return (
    <section className="w-full max-w-[1200px] mx-auto space-y-12 relative px-4">
      {/* Dashed background grid (2026 Developer Aesthetic) */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] opacity-30"></div>

      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground font-plus-jakarta-sans sm:text-4xl">
          The Variable Anatomy
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-dm-sans">
          Every single semantic variable mapped. Change the theme in the
          navigation bar to see the entire grid adapt instantly with perfect
          contrast ratios.
        </p>
      </div>

      {/* BENTO GRID: Fully responsive, explicitly labeled UI tokens */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 1. Base UI Box */}
        <div className="flex flex-col rounded-2xl border border-border bg-background shadow-lg overflow-hidden relative">
          <div className="p-4 border-b border-border bg-surface text-surface-foreground flex items-center justify-between">
            <div className="flex items-center gap-2 font-medium">
              <LayoutTemplate className="size-4 text-primary" /> Base UI
            </div>
            <span className="text-[10px] font-mono opacity-50">
              --background & --surface
            </span>
          </div>
          <div className="p-6 flex-1 flex items-center justify-center bg-background text-foreground">
            <div className="w-full relative">
              <Search className="absolute left-3 top-1/3 -translate-y-1/2 size-4 text-muted-foreground" />
              <input
                disabled
                placeholder="Search documentation..."
                className="w-full h-10 pl-9 pr-4 rounded-md border border-input bg-background text-sm ring-2 ring-ring/50 outline-none"
              />
              <div className="mt-2 flex justify-between px-1">
                <span className="text-[10px] font-mono text-muted-foreground">
                  --input
                </span>
                <span className="text-[10px] font-mono text-muted-foreground">
                  --ring
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Action Tokens */}
        <div className="flex flex-col rounded-2xl border border-border bg-card shadow-lg overflow-hidden">
          <div className="p-4 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-2 font-medium text-card-foreground">
              <MousePointerClick className="size-4 text-primary" /> Action
              States
            </div>
          </div>
          <div className="p-6 flex-1 flex flex-col justify-center gap-4 bg-card text-card-foreground">
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <button className="h-9 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90">
                  Primary
                </button>
                <span className="text-[10px] font-mono text-center text-muted-foreground">
                  --primary
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <button className="h-9 rounded-md bg-secondary text-secondary-foreground text-sm font-medium hover:opacity-90">
                  Secondary
                </button>
                <span className="text-[10px] font-mono text-center text-muted-foreground">
                  --secondary
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <button className="h-9 rounded-md bg-accent text-accent-foreground border border-border text-sm font-medium hover:opacity-90">
                  Accent
                </button>
                <span className="text-[10px] font-mono text-center text-muted-foreground">
                  --accent
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <button className="h-9 rounded-md bg-muted text-muted-foreground text-sm font-medium hover:opacity-90">
                  Muted
                </button>
                <span className="text-[10px] font-mono text-center text-muted-foreground">
                  --muted
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Semantic Feedback */}
        <div className="flex flex-col rounded-2xl border border-border bg-background shadow-lg overflow-hidden">
          <div className="p-4 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-2 font-medium text-foreground">
              <ShieldAlert className="size-4 text-primary" /> Semantic States
            </div>
          </div>
          <div className="p-6 flex-1 flex flex-col gap-3">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-success text-success-foreground border border-success/20">
              <CheckCircle2 className="size-4" />
              <span className="text-sm font-medium flex-1">Completed</span>
              <span className="text-[10px] font-mono opacity-70">
                --success
              </span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-warning text-warning-foreground border border-warning/20">
              <AlertCircle className="size-4" />
              <span className="text-sm font-medium flex-1">Warning</span>
              <span className="text-[10px] font-mono opacity-70">
                --warning
              </span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-destructive text-destructive-foreground border border-destructive/20">
              <AlertTriangle className="size-4" />
              <span className="text-sm font-medium flex-1">Destructive</span>
              <span className="text-[10px] font-mono opacity-70">
                --destructive
              </span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-info text-info-foreground border border-info/20">
              <Info className="size-4" />
              <span className="text-sm font-medium flex-1">Info</span>
              <span className="text-[10px] font-mono opacity-70">--info</span>
            </div>
          </div>
        </div>

        {/* 4. Elevations (Card vs Popover) */}
        <div className="flex flex-col rounded-2xl border border-border bg-background shadow-lg overflow-hidden lg:col-span-2">
          <div className="p-4 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-2 font-medium text-foreground">
              <Settings className="size-4 text-primary" /> Elevation & Surfaces
            </div>
          </div>
          <div className="p-6 flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-surface/50">
            {/* Card */}
            <div className="p-5 rounded-xl border border-border bg-card text-card-foreground shadow-sm flex flex-col">
              <span className="text-[10px] font-mono text-muted-foreground mb-2">
                --card & --card-foreground
              </span>
              <h4 className="font-semibold mb-1">Standard Card</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Base elevation for standard content blocks.
              </p>
              <div className="mt-auto h-8 bg-muted rounded-md w-full animate-pulse" />
            </div>
            {/* Popover */}
            <div className="p-5 rounded-xl border border-border bg-popover text-popover-foreground shadow-2xl flex flex-col scale-105 z-10">
              <span className="text-[10px] font-mono text-muted-foreground mb-2">
                --popover & --popover-foreground
              </span>
              <h4 className="font-semibold mb-1 flex items-center justify-between">
                Dropdown Menu <ChevronRight className="size-4" />
              </h4>
              <p className="text-sm opacity-80 mb-4">
                Highest elevation for floating elements.
              </p>
              <div className="mt-auto space-y-2">
                <div className="h-8 bg-accent rounded-md w-full" />
              </div>
            </div>
          </div>
        </div>

        {/* 5. Data Viz & Sidebar */}
        <div className="flex flex-col rounded-2xl border border-border bg-card shadow-lg overflow-hidden">
          <div className="p-4 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-2 font-medium text-card-foreground">
              <BarChart3 className="size-4 text-primary" /> Data & Sidebar
            </div>
          </div>

          {/* Charts Row */}
          <div className="p-5 border-b border-border">
            <span className="text-[10px] font-mono text-muted-foreground mb-2 block">
              --chart-1 to --chart-5
            </span>
            <div className="flex items-end justify-between h-20 gap-2">
              {[
                "var(--chart-1)",
                "var(--chart-2)",
                "var(--chart-3)",
                "var(--chart-4)",
                "var(--chart-5)",
              ].map((color, i) => (
                <div
                  key={i}
                  className="w-full rounded-t-md hover:opacity-80 transition-opacity"
                  style={{ backgroundColor: color, height: `${40 + i * 15}%` }}
                />
              ))}
            </div>
          </div>

          {/* Sidebar Row */}
          <div className="p-5 bg-sidebar text-sidebar-foreground flex-1 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono opacity-50">
                --sidebar (bg & text)
              </span>
              <PanelLeftClose className="size-4 opacity-50" />
            </div>
            <div className="flex items-center gap-2 p-2 rounded bg-sidebar-primary text-sidebar-primary-foreground text-sm font-medium">
              <div className="size-4 rounded-sm bg-background/20" />{" "}
              --sidebar-primary
            </div>
            <div className="flex items-center gap-2 p-2 rounded bg-sidebar-accent text-sidebar-accent-foreground text-sm font-medium border border-sidebar-border ring-1 ring-sidebar-ring">
              <div className="size-4 rounded-sm bg-sidebar-foreground/20" />{" "}
              --sidebar-accent
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

