function BackgroundBlur() {
  const blurs = [
    { name: 'None', class: 'backdrop-blur-none', var: 'blur-none' },
    { name: 'SM', class: 'backdrop-blur-sm', var: 'var(--blur-sm)' },
    { name: 'MD', class: 'backdrop-blur-md', var: 'var(--blur-md)' },
    { name: 'LG', class: 'backdrop-blur-lg', var: 'var(--blur-lg)' },
    { name: 'XL', class: 'backdrop-blur-xl', var: 'var(--blur-xl)' },
  ];

  return (
    <section className="w-full max-w-[1200px] mx-auto space-y-6 sm:space-y-8 px-4">
      <div className="space-y-2 text-center sm:text-left mb-6">
        <h2 className="header-sm md:header-md font-bold text-foreground">Background Blur</h2>
        <p className="paragraph-sm sm:paragraph-md text-muted-foreground font-dm-sans px-2 sm:px-0">
          Frosted glassmorphism utilities for surfaces and overlays
        </p>
      </div>

      {/* The Staging Area */}
      <div className="relative w-full rounded-2xl border border-border shadow-sm bg-background overflow-hidden min-h-[350px] sm:min-h-[400px] flex items-center justify-center p-4 sm:p-10">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-40 z-0" />

        {/* Top Left: Primary Circle */}
        <div className="absolute -top-12 -left-12 w-40 h-40 sm:w-56 sm:h-56 lg:w-80 lg:h-80 rounded-full bg-primary z-0 shadow-lg" />

        {/* Bottom Right: Secondary Rectangle */}
        <div className="absolute -bottom-12 -right-12 w-40 h-40 sm:w-56 sm:h-56 lg:w-80 lg:h-80 rounded-3xl bg-secondary rotate-12 z-0 shadow-lg" />

        {/* Center Stripe: Accent */}
        <div className="absolute top-1/2 left-0 w-full h-12 sm:h-16 bg-accent -translate-y-1/2 -rotate-3 z-0" />

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 lg:gap-6 w-full relative z-10">
          {blurs.map((b) => (
            <div
              key={b.name}
              className={`flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 rounded-xl border border-border/40 bg-background/20 shadow-2xl transition-transform duration-300 hover:scale-105 ${b.class}`}
            >
              {/* Inner Pill for Text Legibility */}
              <div className="flex flex-col items-center gap-1 bg-background/80 px-3 py-2 sm:px-4 sm:py-2 rounded-lg border border-border/50 shadow-sm">
                <p className="text-xs sm:text-sm font-bold text-foreground">{b.name}</p>
                <p className="text-[8px] sm:text-[10px] font-mono text-muted-foreground">{b.var}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BackgroundBlur;
