"use client";

import { Code2, Database, Globe, Monitor, Cpu, Users } from "lucide-react";
import { SectionHeader } from "./section-header";
import { useLanguage } from "@/contexts/language-context";

const highlightIcons = [Code2, Database, Globe, Monitor, Cpu, Users];

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container">
        <SectionHeader
          badge={t.about.badge}
          title={t.about.title}
          description={t.about.description}
        />

        <div className="grid gap-8 lg:grid-cols-2 items-start">
          {/* Bio Card */}
          <div className="relative overflow-hidden rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm sm:p-8">
            <div className="absolute right-0 top-0 h-20 w-20">
              <div className="absolute right-2 top-2 h-full w-full border-r-2 border-t-2 border-primary/20" />
            </div>

            <h3 className="mb-4 text-xl font-semibold text-foreground">
              {t.about.profileTitle}
            </h3>

            <div className="space-y-4 text-muted-foreground">
              <p>
                {t.about.bio.p1a}{" "}
                <span className="text-primary">
                  Asociación Duarte de Ahorros y Préstamos
                </span>
                {t.about.bio.p1b}
              </p>
              <p>{t.about.bio.p2}</p>
              <p>{t.about.bio.p3}</p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-lg border border-border/50 bg-background/50 p-3">
                <div className="text-xs text-muted-foreground">{t.about.location}</div>
                <div className="font-medium text-foreground">{t.about.locationValue}</div>
              </div>
              <div className="rounded-lg border border-border/50 bg-background/50 p-3">
                <div className="text-xs text-muted-foreground">{t.about.education}</div>
                <div className="font-medium text-foreground">{t.about.educationValue}</div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
            {t.about.highlights.map((item, index) => {
              const Icon = highlightIcons[index];
              return (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-lg border border-border bg-card/30 p-4 transition-all duration-300 hover:border-primary/50 hover:bg-card/50"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <Icon className="mb-3 h-8 w-8 text-primary transition-transform group-hover:scale-110" />
                  <h4 className="mb-1 font-medium text-foreground">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
