"use client";

import { ExternalLink, Github, FolderGit2 } from "lucide-react";
import { SectionHeader } from "./section-header";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";

type ProjectType = "Web" | "API" | "Desktop" | "Mobile";

const projectsMeta: { techStack: string[]; type: ProjectType }[] = [
  { techStack: ["C#", ".NET", "React", "SQL Server", "REST API"], type: "Web" },
  { techStack: ["React", "C#", "SQL Server", "Tailwind CSS"], type: "Web" },
  { techStack: ["C#", ".NET", "SQL Server", "REST API"], type: "API" },
  { techStack: ["Blazor", "C#", "SQL Server", "Charts"], type: "Web" },
  { techStack: ["Xamarin Android", "C#", "SQL Server", "Barcode API"], type: "Mobile" },
  { techStack: ["WordPress", "PHP", "JavaScript", "CSS"], type: "Web" },
];

const typeColors: Record<ProjectType, string> = {
  Web: "bg-primary/20 text-primary border-primary/30",
  API: "bg-cyan/20 text-cyan border-cyan/30",
  Desktop: "bg-chart-3/20 text-chart-3 border-chart-3/30",
  Mobile: "bg-chart-4/20 text-chart-4 border-chart-4/30",
};

export function ProjectsSection() {
  const { t } = useLanguage();

  const projects = t.projects.items.map((item, i) => ({
    ...item,
    ...projectsMeta[i],
  }));

  return (
    <section id="projects" className="relative py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/3 left-0 h-64 w-64 rounded-full bg-cyan/5 blur-3xl" />
      </div>

      <div className="container">
        <SectionHeader
          badge={t.projects.badge}
          title={t.projects.title}
          description={t.projects.description}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card/30 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card/50"
            >
              <div className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: "radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), var(--primary) 0%, transparent 40%)", opacity: 0.1 }}
              />

              <div className="flex items-start justify-between p-6 pb-0">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background/50">
                    <FolderGit2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground transition-colors group-hover:text-primary">
                      {project.title}
                    </h3>
                    <span className={`mt-1 inline-flex rounded-full border px-2 py-0.5 text-xs ${typeColors[project.type]}`}>
                      {project.type}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="mb-4 flex-1 text-sm text-muted-foreground">{project.description}</p>

                <div className="mb-4 space-y-1">
                  {project.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="h-1 w-1 rounded-full bg-primary" />
                      {highlight}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="rounded border border-border bg-secondary/50 px-2 py-1 font-mono text-xs text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4 text-muted-foreground">{t.projects.wantMore}</p>
          <Button
            variant="outline"
            size="lg"
            className="border-primary/50 hover:border-primary hover:bg-primary/10 bg-transparent"
            asChild
          >
            <a href="https://github.com/BryantJim" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              {t.projects.viewGitHub}
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
