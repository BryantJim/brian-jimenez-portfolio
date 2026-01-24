interface SectionHeaderProps {
  badge: string;
  title: string;
  description?: string;
}

export function SectionHeader({ badge, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-12 text-center">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        <span className="text-sm font-medium text-primary">{badge}</span>
      </div>
      <h2
        className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        style={{ fontFamily: "var(--font-orbitron)" }}
      >
        {title}
      </h2>
      {description && (
        <p className="mx-auto max-w-2xl text-balance text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
