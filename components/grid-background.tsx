"use client";

export function GridBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--border) 1px, transparent 1px),
            linear-gradient(to bottom, var(--border) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Animated scan line */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute left-0 h-px w-full animate-scan-line"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--cyan), transparent)",
            boxShadow: "0 0 20px var(--cyan)",
          }}
        />
      </div>

      {/* Corner accents */}
      <div className="absolute left-4 top-4 h-20 w-20 border-l-2 border-t-2 border-primary/30" />
      <div className="absolute right-4 top-4 h-20 w-20 border-r-2 border-t-2 border-primary/30" />
      <div className="absolute bottom-4 left-4 h-20 w-20 border-b-2 border-l-2 border-primary/30" />
      <div className="absolute bottom-4 right-4 h-20 w-20 border-b-2 border-r-2 border-primary/30" />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background opacity-50" />

      {/* Glowing orbs */}
      <div
        className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--primary)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full opacity-15 blur-3xl"
        style={{ background: "var(--cyan)" }}
      />
    </div>
  );
}
