"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={cn(
          "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
          isScrolled
            ? "border-b border-border/50 bg-background/80 backdrop-blur-md"
            : "bg-transparent"
        )}
      >
        <div className="container flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="flex items-center gap-2"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/50 bg-primary/10">
              <span
                className="text-sm font-bold text-primary"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                AB
              </span>
            </div>
            <span className="hidden font-semibold text-foreground sm:block">
              Anthony Brian
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors",
                  activeSection === item.href.substring(1)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
                {activeSection === item.href.substring(1) && (
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-primary" />
                )}
              </button>
            ))}
          </div>

          {/* Status indicator (desktop) */}
          <div className="hidden items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 md:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-chart-2 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-chart-2" />
            </span>
            <span className="text-xs font-medium text-primary">Available</span>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card/50 md:hidden"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md md:hidden">
          <div className="container flex h-full flex-col items-center justify-center gap-8 px-4">
            {navItems.map((item, index) => (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  "text-2xl font-medium transition-all",
                  activeSection === item.href.substring(1)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <span className="mr-3 font-mono text-sm text-primary/50">
                  0{index + 1}
                </span>
                {item.label}
              </button>
            ))}

            {/* Status indicator (mobile) */}
            <div className="mt-8 flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-chart-2 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-chart-2" />
              </span>
              <span className="text-sm font-medium text-primary">
                Available for opportunities
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
