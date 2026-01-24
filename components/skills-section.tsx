"use client";

import { SectionHeader } from "./section-header";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Web Development",
    icon: "WEB",
    skills: [
      { name: "React", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "WordPress", level: 80 },
    ],
  },
  {
    title: "Backend / APIs",
    icon: "API",
    skills: [
      { name: "C#", level: 90 },
      { name: ".NET", level: 85 },
      { name: "RESTful APIs", level: 90 },
      { name: "VB.NET", level: 80 },
    ],
  },
  {
    title: "Desktop Development",
    icon: "APP",
    skills: [
      { name: "Blazor", level: 85 },
      { name: "MAUI", level: 75 },
      { name: "Windows Forms", level: 80 },
      { name: "Xamarin Android", level: 75 },
    ],
  },
  {
    title: "Databases",
    icon: "DB",
    skills: [
      { name: "SQL Server", level: 90 },
      { name: "SQL", level: 95 },
      { name: "IBM AS/400", level: 70 },
    ],
  },
];

function SkillBar({ skill }: { skill: Skill }) {
  return (
    <div className="group">
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-sm text-foreground">{skill.name}</span>
        <span className="font-mono text-xs text-primary">{skill.level}%</span>
      </div>
      <div className="relative h-2 overflow-hidden rounded-full bg-secondary">
        {/* Track markers */}
        <div className="absolute inset-0 flex">
          {[...Array(10)].map((_, i) => (
            <div
              key={`marker-${skill.name}-${i}`}
              className="flex-1 border-r border-background/30 last:border-r-0"
            />
          ))}
        </div>
        {/* Progress bar */}
        <div
          className="relative h-full rounded-full bg-gradient-to-r from-primary to-cyan transition-all duration-700"
          style={{ width: `${skill.level}%` }}
        >
          {/* Animated shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
      </div>
    </div>
  );
}

function SkillCard({ category }: { category: SkillCategory }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-border bg-card/30 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-card/50">
      {/* Header */}
      <div className="mb-6 flex items-center gap-4">
        {/* Icon badge */}
        <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-primary/30 bg-primary/10">
          <span
            className="text-xs font-bold text-primary"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            {category.icon}
          </span>
        </div>
        <div>
          <h3 className="font-semibold text-foreground">{category.title}</h3>
          <p className="text-xs text-muted-foreground">
            {category.skills.length} technologies
          </p>
        </div>
      </div>

      {/* Skills list */}
      <div className="space-y-4">
        {category.skills.map((skill) => (
          <SkillBar key={skill.name} skill={skill} />
        ))}
      </div>

      {/* Corner accents */}
      <div className="absolute bottom-0 right-0 h-16 w-16 opacity-0 transition-opacity group-hover:opacity-100">
        <div className="absolute bottom-2 right-2 h-full w-full border-b-2 border-r-2 border-primary/30" />
      </div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-24">
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--primary) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container">
        <SectionHeader
          badge="02"
          title="Skills & Technologies"
          description="A comprehensive toolkit built through years of hands-on experience in enterprise software development"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category) => (
            <SkillCard key={category.title} category={category} />
          ))}
        </div>

        {/* Additional skills */}
        <div className="mt-8 rounded-xl border border-border bg-card/30 p-6 backdrop-blur-sm">
          <h3 className="mb-4 text-center font-semibold text-foreground">
            Additional Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Agile",
              "Scrum",
              "NUnit Testing",
              "Git",
              "Technical Support",
              "Team Collaboration",
              "Client Service",
              "Excel",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
