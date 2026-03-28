function Stroke() {
  const strokes = [
    { name: "0.5px", class: "border-[0.5px]" },
    { name: "1px", class: "border" },
    { name: "1.5px", class: "border-[1.5px]" },
    { name: "2px", class: "border-[2px]" },
  ];

  return (
    <section className="w-full max-w-[1200px] mx-auto space-y-6 sm:space-y-8 px-4">
      <div className="space-y-2 text-center sm:text-left mb-6">
        <h2 className="header-sm md:header-md font-bold text-foreground">
          Stroke Widths
        </h2>
        <p className="paragraph-sm sm:paragraph-md text-muted-foreground font-dm-sans px-2 sm:px-0">
          Border thickness scale for component boundaries.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {strokes.map((s) => (
          <div
            key={s.name}
            className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-surface/50 backdrop-blur-sm border border-border/30"
          >
            <div
              className={`size-16 bg-transparent flex items-center justify-center rounded-xl border-foreground/80 ${s.class}`}
            >
              <div
                className={`size-8 rounded-md border-primary/50 bg-primary/5 ${s.class}`}
              />
            </div>
            <div className="text-center space-y-1">
              <p className="text-sm font-bold text-foreground">{s.name}</p>
              <p className="text-[10px] font-mono text-muted-foreground">
                {s.class}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stroke;
