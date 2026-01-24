"use client";

import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-card/30 py-8">
      {/* Top accent line */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo and copyright */}
          <div className="flex items-center gap-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-primary/50 bg-primary/10">
              <span
                className="text-xs font-bold text-primary"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                AB
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="text-foreground">{currentYear}</span> Anthony
              Brian Jiménez López
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/BryantJim"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background/50 text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/anthony-brian-jiménez-lópez-3a2878230"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background/50 text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:Jimenezbrian588@outlook.com"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background/50 text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>

          {/* Built with */}
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            Built with <Heart className="h-3 w-3 text-destructive" /> using
            React & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
}
