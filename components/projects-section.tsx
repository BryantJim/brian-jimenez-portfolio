"use client";

import { ExternalLink, Github, FolderGit2 } from "lucide-react";
import { SectionHeader } from "./section-header";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  type: "Web" | "API" | "Desktop" | "Mobile";
  highlights: string[];
}

const projects: Project[] = [
  {
    title: "DGII Tax Payment Platform",
    description:
      "A web application enabling users to pay their taxes to the DGII (Dominican Tax Authority) directly through the institution's banking services.",
    techStack: ["C#", ".NET", "React", "SQL Server", "REST API"],
    type: "Web",
    highlights: [
      "Secure payment processing",
      "Real-time tax validation",
      "User-friendly interface",
    ],
  },
  {
    title: "Internal Requirements Management",
    description:
      "A comprehensive internal system to handle development requests with status tracking, file/document management, and workflow visualization.",
    techStack: ["React", "C#", "SQL Server", "Tailwind CSS"],
    type: "Web",
    highlights: [
      "Workflow automation",
      "Document management",
      "Status tracking dashboard",
    ],
  },
  {
    title: "Remittance API",
    description:
      "RESTful API allowing clients to receive international payments directly to their debit cards via secure links.",
    techStack: ["C#", ".NET", "SQL Server", "REST API"],
    type: "API",
    highlights: [
      "Secure transactions",
      "Multi-currency support",
      "Integration ready",
    ],
  },
  {
    title: "Sales Dashboard",
    description:
      "A customizable real-time sales analytics dashboard built with Blazor for tracking performance by day, month, or custom date ranges.",
    techStack: ["Blazor", "C#", "SQL Server", "Charts"],
    type: "Web",
    highlights: [
      "Real-time analytics",
      "Custom date ranges",
      "Interactive charts",
    ],
  },
  {
    title: "Price Scanner App",
    description:
      "A tablet-based application using Xamarin Android that scans barcodes and displays product prices directly from the supermarket's central database.",
    techStack: ["Xamarin Android", "C#", "SQL Server", "Barcode API"],
    type: "Mobile",
    highlights: [
      "Barcode scanning",
      "Real-time pricing",
      "Offline capability",
    ],
  },
  {
    title: "CODIA Nordeste Website",
    description:
      "WordPress-based website with custom modules and dynamic content for the regional engineering guild (Colegio Dominicano de Ingenieros).",
    techStack: ["WordPress", "PHP", "JavaScript", "CSS"],
    type: "Web",
    highlights: [
      "Custom modules",
      "Dynamic content",
      "Member portal",
    ],
  },
];

const typeColors: Record<Project["type"], string> = {
  Web: "bg-primary/20 text-primary border-primary/30",
  API: "bg-cyan/20 text-cyan border-cyan/30",
  Desktop: "bg-chart-3/20 text-chart-3 border-chart-3/30",
  Mobile: "bg-chart-4/20 text-chart-4 border-chart-4/30",
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card/30 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card/50">
      {/* Glow effect on hover */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), var(--primary) 0%, transparent 40%)",
          opacity: 0.1,
        }}
      />

      {/* Header */}
      <div className="flex items-start justify-between p-6 pb-0">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background/50">
            <FolderGit2 className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground transition-colors group-hover:text-primary">
              {project.title}
            </h3>
            <span
              className={`mt-1 inline-flex rounded-full border px-2 py-0.5 text-xs ${typeColors[project.type]}`}
            >
              {project.type}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <p className="mb-4 flex-1 text-sm text-muted-foreground">
          {project.description}
        </p>

        {/* Highlights */}
        <div className="mb-4 space-y-1">
          {project.highlights.map((highlight) => (
            <div
              key={highlight}
              className="flex items-center gap-2 text-xs text-muted-foreground"
            >
              <span className="h-1 w-1 rounded-full bg-primary" />
              {highlight}
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded border border-border bg-secondary/50 px-2 py-1 font-mono text-xs text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer border effect */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/3 left-0 h-64 w-64 rounded-full bg-cyan/5 blur-3xl" />
      </div>

      <div className="container">
        <SectionHeader
          badge="03"
          title="Featured Projects"
          description="A selection of enterprise solutions and applications I have built throughout my career"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-12 text-center">
          <p className="mb-4 text-muted-foreground">
            Want to see more of my work?
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-primary/50 hover:border-primary hover:bg-primary/10 bg-transparent"
            asChild
          >
            <a
              href="https://github.com/BryantJim"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-5 w-5" />
              View GitHub Profile
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
