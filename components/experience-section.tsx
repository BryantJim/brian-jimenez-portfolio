"use client";

import { Briefcase, GraduationCap, Award } from "lucide-react";
import { SectionHeader } from "./section-header";
import { useLanguage } from "@/contexts/language-context";

type ExperienceType = "work" | "education" | "certification";

const iconMap: Record<ExperienceType, typeof Briefcase> = {
  work: Briefcase,
  education: GraduationCap,
  certification: Award,
};

const colorMap: Record<ExperienceType, string> = {
  work: "border-primary/50 bg-primary/10 text-primary",
  education: "border-cyan/50 bg-cyan/10 text-cyan",
  certification: "border-chart-4/50 bg-chart-4/10 text-chart-4",
};

export function ExperienceSection() {
  const { t } = useLanguage();
  const experiences = t.experience.items;

  return (
    <section id="experience" className="relative py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container">
        <SectionHeader
          badge={t.experience.badge}
          title={t.experience.title}
          description={t.experience.description}
        />

        <div className="mx-auto max-w-3xl">
          {experiences.map((experience, index) => {
            const Icon = iconMap[experience.type];
            const colorClass = colorMap[experience.type];

            return (
              <div key={`${experience.title}-${experience.company}`} className="group relative flex gap-6">
                <div className="relative flex flex-col items-center">
                  <div className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-xl border ${colorClass} transition-all duration-300 group-hover:scale-110`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  {index < experiences.length - 1 && (
                    <div className="absolute left-1/2 top-12 h-full w-px -translate-x-1/2 bg-gradient-to-b from-border to-transparent" />
                  )}
                </div>

                <div className="flex-1 pb-12">
                  <div className="rounded-xl border border-border bg-card/30 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-card/50">
                    <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{experience.title}</h3>
                        <p className="text-primary">{experience.company}</p>
                      </div>
                      <div className="text-right">
                        <div className="rounded-full border border-border bg-secondary/50 px-3 py-1 font-mono text-xs text-muted-foreground">
                          {experience.period}
                        </div>
                        <p className="mt-1 text-xs text-muted-foreground">{experience.location}</p>
                      </div>
                    </div>

                    <p className="mb-4 text-sm text-muted-foreground">{experience.description}</p>

                    {"highlights" in experience && experience.highlights && experience.highlights.length > 0 && (
                      <div className="space-y-2">
                        {experience.highlights.map((highlight) => (
                          <div key={highlight} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
