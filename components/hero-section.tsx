"use client";

import { Github, Linkedin, ChevronDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GridBackground } from "./grid-background";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <GridBackground />

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Status indicator */}
          <div className="mb-6 flex items-center gap-2 rounded-full border border-primary/30 bg-card/50 px-4 py-2 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
            </span>
            <span className="text-sm text-muted-foreground">
              Available for opportunities
            </span>
          </div>

          {/* Main heading */}
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block text-foreground">Anthony Brian</span>
            <span
              className="mt-2 block bg-gradient-to-r from-primary via-cyan to-primary bg-clip-text text-transparent"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              Jiménez López
            </span>
          </h1>

          {/* Role/Title */}
          <div className="mb-6 flex flex-wrap items-center justify-center gap-2 font-mono text-sm text-muted-foreground sm:text-base">
            <span className="rounded border border-border bg-card/50 px-3 py-1">
              Software Developer
            </span>
            <span className="text-primary">/</span>
            <span className="rounded border border-border bg-card/50 px-3 py-1">
              Full Stack
            </span>
            <span className="text-primary">/</span>
            <span className="rounded border border-border bg-card/50 px-3 py-1">
              Systems Engineer
            </span>
          </div>

          {/* Tagline */}
          <p className="mb-8 max-w-2xl text-balance text-lg text-muted-foreground sm:text-xl">
            Building scalable solutions and transforming complex problems into
            elegant, high-quality software. Passionate about technology,
            innovation, and continuous improvement.
          </p>

          {/* CTA Buttons */}
          <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              className="group relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform group-hover:translate-x-full" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 hover:border-primary hover:bg-primary/10 bg-transparent"
              asChild
            >
              <a
                href="https://github.com/BryantJim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-cyan/50 hover:border-cyan hover:bg-cyan/10 bg-transparent"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/anthony-brian-jiménez-lópez-3a2878230"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>

            
          </div>

          {/* Stats/Quick info */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { value: "4+", label: "Years Experience" },
              { value: "10+", label: "Projects Delivered" },
              { value: "5+", label: "Technologies" },
              { value: "100%", label: "Commitment" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-border/50 bg-card/30 px-4 py-3 backdrop-blur-sm"
              >
                <div
                  className="text-2xl font-bold text-primary"
                  style={{ fontFamily: "var(--font-orbitron)" }}
                >
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <button
          type="button"
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
          aria-label="Scroll to about section"
        >
          <span className="text-xs font-mono">SCROLL</span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
