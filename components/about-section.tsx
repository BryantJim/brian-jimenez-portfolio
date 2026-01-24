"use client";

import { Code2, Database, Globe, Monitor, Cpu, Users } from "lucide-react";
import { SectionHeader } from "./section-header";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and well-documented code",
  },
  {
    icon: Database,
    title: "System Design",
    description: "Architecting robust backend systems and databases",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Building modern, responsive web applications",
  },
  {
    icon: Monitor,
    title: "Desktop Apps",
    description: "Creating powerful desktop solutions with .NET",
  },
  {
    icon: Cpu,
    title: "Problem Solving",
    description: "Turning complex challenges into elegant solutions",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Collaborating effectively with cross-functional teams",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-24">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container">
        <SectionHeader
          badge="01"
          title="About Me"
          description="Systems Engineer with a passion for building software that makes a difference"
        />

        <div className="grid gap-8 lg:grid-cols-2 items-start">
          {/* Bio Card */}
          <div className="relative overflow-hidden rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm sm:p-8">
            {/* Corner decoration */}
            <div className="absolute right-0 top-0 h-20 w-20">
              <div className="absolute right-2 top-2 h-full w-full border-r-2 border-t-2 border-primary/20" />
            </div>

            <h3 className="mb-4 text-xl font-semibold text-foreground">
              Professional Profile
            </h3>

            <div className="space-y-4 text-muted-foreground">
              <p>
                I am a Systems Engineer with proven experience in software
                development and project management, currently working at{" "}
                <span className="text-primary">
                  Asociación Duarte de Ahorros y Préstamos
                </span>
                , where I design and implement enterprise-level solutions for the
                financial sector.
              </p>
              <p>
                My expertise spans across web development, desktop applications,
                and backend systems. I am passionate about technology and
                innovation, with strong skills in programming, data analysis, and
                problem-solving.
              </p>
              <p>
                Detail-oriented and results-driven, I am committed to delivering
                scalable, high-quality solutions that meet business objectives
                while maintaining clean code practices.
              </p>
            </div>

            {/* Quick facts */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-lg border border-border/50 bg-background/50 p-3">
                <div className="text-xs text-muted-foreground">Location</div>
                <div className="font-medium text-foreground">
                  Dominican Republic
                </div>
              </div>
              <div className="rounded-lg border border-border/50 bg-background/50 p-3">
                <div className="text-xs text-muted-foreground">Education</div>
                <div className="font-medium text-foreground">
                  B.Sc. Systems Engineering
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-lg border border-border bg-card/30 p-4 transition-all duration-300 hover:border-primary/50 hover:bg-card/50"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                <item.icon className="mb-3 h-8 w-8 text-primary transition-transform group-hover:scale-110" />
                <h4 className="mb-1 font-medium text-foreground">{item.title}</h4>
                <p className="text-xs text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
