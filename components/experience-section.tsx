"use client";

import { Briefcase, GraduationCap, Award } from "lucide-react";
import { SectionHeader } from "./section-header";

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  type: "work" | "education" | "certification";
  description: string;
  highlights?: string[];
}

const experiences: Experience[] = [
  {
    title: "Software Developer",
    company: "Asociación Duarte de Ahorros y Préstamos",
    location: "San Francisco de Macorís",
    period: "Sep 2023 – Present",
    type: "work",
    description:
      "Designing and implementing enterprise-level solutions for the financial sector, including RESTful APIs, modern web interfaces, and system integrations.",
    highlights: [
      "Designed and implemented RESTful APIs using C#",
      "Worked with IBM AS/400 systems and SQL Server integration",
      "Developed modern UIs with React, JavaScript, and Tailwind CSS",
      "Delivered DGII Tax Payment Platform and Remittance API",
    ],
  },
  {
    title: "Software Developer",
    company: "Soluciones Almonte Gil",
    location: "San Francisco de Macorís",
    period: "Sep 2021 – Sep 2023",
    type: "work",
    description:
      "Developed and maintained web and desktop applications using C# and VB.NET, with experience in Blazor, MAUI, Windows Forms, and Xamarin Android.",
    highlights: [
      "Built Sales Dashboard with Blazor for real-time analytics",
      "Created Price Scanner App using Xamarin Android",
      "Conducted unit testing using NUnit",
      "Participated in full development lifecycle",
    ],
  },
  {
    title: "Software Development Intern",
    company: "Soluciones Almonte Gil",
    location: "San Francisco de Macorís",
    period: "Mar 2021 – Aug 2021",
    type: "work",
    description:
      "Supported development of software modules, participated in debugging and testing, and collaborated with senior developers on technical solutions.",
    highlights: [
      "Assisted in building database scripts",
      "Debugged legacy modules for improved performance",
      "Learned enterprise development practices",
    ],
  },
  {
    title: "B.Sc. in Systems Engineering",
    company: "Catholic University Nordestana (UCNE)",
    location: "San Francisco de Macorís",
    period: "2017 – 2022",
    type: "education",
    description:
      "Comprehensive education in software engineering, systems design, database management, and project management methodologies.",
  },
  {
    title: "Mobile Programming Diploma (Android)",
    company: "ITLA",
    location: "Dominican Republic",
    period: "2024",
    type: "certification",
    description: "Advanced mobile development training focused on Android application development.",
  },
];

const iconMap = {
  work: Briefcase,
  education: GraduationCap,
  certification: Award,
};

const colorMap = {
  work: "border-primary/50 bg-primary/10 text-primary",
  education: "border-cyan/50 bg-cyan/10 text-cyan",
  certification: "border-chart-4/50 bg-chart-4/10 text-chart-4",
};

function TimelineItem({ experience, index }: { experience: Experience; index: number }) {
  const Icon = iconMap[experience.type];
  const colorClass = colorMap[experience.type];

  return (
    <div className="group relative flex gap-6">
      {/* Timeline line */}
      <div className="relative flex flex-col items-center">
        {/* Icon */}
        <div
          className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-xl border ${colorClass} transition-all duration-300 group-hover:scale-110`}
        >
          <Icon className="h-5 w-5" />
        </div>
        {/* Vertical line */}
        {index < experiences.length - 1 && (
          <div className="absolute left-1/2 top-12 h-full w-px -translate-x-1/2 bg-gradient-to-b from-border to-transparent" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-12">
        <div className="rounded-xl border border-border bg-card/30 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-card/50">
          {/* Header */}
          <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                {experience.title}
              </h3>
              <p className="text-primary">{experience.company}</p>
            </div>
            <div className="text-right">
              <div className="rounded-full border border-border bg-secondary/50 px-3 py-1 font-mono text-xs text-muted-foreground">
                {experience.period}
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                {experience.location}
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="mb-4 text-sm text-muted-foreground">
            {experience.description}
          </p>

          {/* Highlights */}
          {experience.highlights && experience.highlights.length > 0 && (
            <div className="space-y-2">
              {experience.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
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
}

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24">
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container">
        <SectionHeader
          badge="04"
          title="Experience & Education"
          description="My professional journey in enterprise software development and continuous learning"
        />

        <div className="mx-auto max-w-3xl">
          {experiences.map((experience, index) => (
            <TimelineItem
              key={`${experience.title}-${experience.company}`}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
