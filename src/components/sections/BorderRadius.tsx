function BorderRadius() {
  const radiuses = [
    { name: "SM", class: "rounded-sm", var: "--radius-sm" },
    { name: "MD", class: "rounded-md", var: "--radius-md" },
    { name: "LG", class: "rounded-lg", var: "--radius-lg" },
    { name: "XL", class: "rounded-xl", var: "--radius-xl" },
    { name: "2XL", class: "rounded-2xl", var: "--radius-2xl" },
  ];

  return (
    <section className="w-full max-w-[1200px] mx-auto space-y-6 sm:space-y-8 px-4">
      <div className="space-y-2 text-center sm:text-left mb-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground font-plus-jakarta-sans">
          Border Radius
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground font-dm-sans px-2 sm:px-0">
          Consistent curvature mapped to CSS variables.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {radiuses.map((r) => (
          <div
            key={r.name}
            className="flex flex-col items-center gap-4 p-6 rounded-2xl border border-border bg-surface/50 backdrop-blur-sm shadow-sm"
          >
            <div
              className={`size-16 bg-primary/10 border border-primary/30 flex items-center justify-center ${r.class}`}
            >
              <div className={`size-8 bg-primary ${r.class}`} />
            </div>
            <div className="text-center space-y-1">
              <p className="text-sm font-bold text-foreground">{r.name}</p>
              <p className="text-[10px] font-mono text-muted-foreground">
                {r.var}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BorderRadius;
