import { CheckCircle2, AlertTriangle, Info, XCircle } from "lucide-react";

const colorRamps = [
  {
    name: "Blue Primary",
    prefix: "blue-primary",
    steps: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  },
  {
    name: "Purple Secondary",
    prefix: "purple-secondary",
    steps: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  },
  {
    name: "Gray",
    prefix: "gray",
    steps: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950, 1000],
  },
  {
    name: "Gray Blue",
    prefix: "gray-blue",
    steps: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950, 1000],
  },
  {
    name: "Baby Blue",
    prefix: "baby-blue",
    steps: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950, 1000],
  },
  {
    name: "Pink",
    prefix: "pink",
    steps: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  },
  {
    name: "Cyan",
    prefix: "cyan",
    steps: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  },
  {
    name: "Orange",
    prefix: "orange",
    steps: [50, 100, 200, 300, 400, 500, 600],
  },
  { name: "Flashy Green", prefix: "flashy-green", steps: [50, 100, 200, 300] },
  { name: "Green", prefix: "green", steps: [50, 300, 400] },
  { name: "Red", prefix: "red", steps: [50, 100, 200] },
  { name: "Yellow", prefix: "yellow", steps: [50, 100, 200] },
  {
    name: "Accents",
    prefix: "accent",
    isSpecial: true,
    steps: ["blue-50", "flash-50", "green-50", "magenta-50", "red-50"],
  },
];

function Colors() {
  return (
    <section className="w-full max-w-[1200px] mx-auto space-y-6 sm:space-y-8 px-4">
      <div className="space-y-2 text-center sm:text-left mb-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground font-plus-jakarta-sans">
          Color Palette
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground font-dm-sans px-2 sm:px-0">
          The comprehensive color system powering the theme engine.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Core Ramps */}
        {colorRamps.map((ramp) => (
          <div
            key={ramp.name}
            className="flex flex-col rounded-xl border border-border bg-card shadow-sm overflow-hidden p-4"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-foreground">
                {ramp.name}
              </h3>
              <span className="text-[10px] font-mono text-muted-foreground">
                --{ramp.prefix}-*
              </span>
            </div>
            <div className="flex w-full h-10 rounded-md overflow-hidden border border-border/50">
              {ramp.steps.map((step) => (
                <div
                  key={step}
                  className="flex-1 hover:scale-110 hover:z-10 transition-transform origin-center cursor-pointer"
                  style={{
                    backgroundColor: ramp.isSpecial
                      ? `var(--${ramp.prefix}-${step})`
                      : `var(--${ramp.prefix}-${step})`,
                  }}
                  title={`--${ramp.prefix}-${step}`}
                />
              ))}
            </div>
          </div>
        ))}

        {/* Neutrals */}
        <div className="flex flex-col rounded-xl border border-border bg-card shadow-sm overflow-hidden p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-foreground">Neutrals</h3>
            <span className="text-[10px] font-mono text-muted-foreground">
              --neutral-*
            </span>
          </div>
          <div className="flex w-full h-10 rounded-md overflow-hidden border border-border/50">
            <div
              className="flex-1 hover:scale-110 hover:z-10 transition-transform origin-center cursor-pointer bg-[#000000]"
              style={{ backgroundColor: `var(--neutral-black)` }}
              title="--neutral-black"
            />
            <div
              className="flex-1 hover:scale-110 hover:z-10 transition-transform origin-center cursor-pointer bg-[#ffffff]"
              style={{ backgroundColor: `var(--neutral-white)` }}
              title="--neutral-white"
            />
          </div>
        </div>

        {/* Semantic Colors */}
        <div className="flex flex-col rounded-xl border border-border bg-card shadow-sm overflow-hidden p-4 lg:col-span-3">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-foreground">
              Semantic Colors
            </h3>
            <span className="text-[10px] font-mono text-muted-foreground">
              --success, --warning, --destructive, info
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-success text-success-foreground border border-success/20">
              <CheckCircle2 className="size-4 shrink-0" />
              <span className="text-xs font-semibold">Success</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-warning text-warning-foreground border border-warning/20">
              <AlertTriangle className="size-4 shrink-0" />
              <span className="text-xs font-semibold">Warning</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-destructive text-destructive-foreground border border-destructive/20">
              <XCircle className="size-4 shrink-0" />
              <span className="text-xs font-semibold">Destructive</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-info text-info-foreground border border-info/20">
              <Info className="size-4 shrink-0" />
              <span className="text-xs font-semibold">Info</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Colors;
