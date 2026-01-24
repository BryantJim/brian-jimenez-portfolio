"use client";

import React from "react"

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  Terminal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeader } from "./section-header";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "Jimenezbrian588@outlook.com",
    href: "mailto:Jimenezbrian588@outlook.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (829) 458-7954",
    href: "tel:+18294587954",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco de Macorís, DR",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/BryantJim",
    username: "BryantJim",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/anthony-brian-jiménez-lópez-3a2878230",
    username: "anthony-brian-jiménez-lópez",
  },
];

// Replace with your Formspree form ID from https://formspree.io
const FORMSPREE_ID = "xgoargon";

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError("Failed to send message. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute right-1/4 top-1/3 h-48 w-48 rounded-full bg-cyan/5 blur-3xl" />
      </div>

      <div className="container">
        <SectionHeader
          badge="05"
          title="Get In Touch"
          description="Have a project in mind or want to collaborate? Let's connect!"
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Info & Terminal */}
          <div className="space-y-6">
            {/* Contact cards */}
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="group flex items-center gap-4 rounded-lg border border-border bg-card/30 p-4 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card/50"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-primary/30 bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-medium text-foreground transition-colors hover:text-primary"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-1 items-center gap-3 rounded-lg border border-border bg-card/30 p-4 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card/50"
                >
                  <link.icon className="h-5 w-5 text-primary transition-transform group-hover:scale-110" />
                  <div>
                    <p className="text-xs text-muted-foreground">{link.label}</p>
                    <p className="font-mono text-sm text-foreground">
                      @{link.username}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Terminal style info */}
            <div className="overflow-hidden rounded-xl border border-border bg-card/50 backdrop-blur-sm">
              {/* Terminal header */}
              <div className="flex items-center gap-2 border-b border-border bg-secondary/50 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-destructive/50" />
                  <div className="h-3 w-3 rounded-full bg-chart-4/50" />
                  <div className="h-3 w-3 rounded-full bg-chart-2/50" />
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Terminal className="h-3 w-3" />
                  <span>developer_info.sh</span>
                </div>
              </div>

              {/* Terminal content */}
              <div className="p-4 font-mono text-sm">
                <div className="space-y-2">
                  <p>
                    <span className="text-primary">$</span>{" "}
                    <span className="text-cyan">whoami</span>
                  </p>
                  <p className="text-muted-foreground">
                    anthony-brian-jimenez-lopez
                  </p>

                  <p className="mt-4">
                    <span className="text-primary">$</span>{" "}
                    <span className="text-cyan">cat</span> current_role.txt
                  </p>
                  <p className="text-muted-foreground">
                    Software Developer @ Asociación Duarte
                  </p>

                  <p className="mt-4">
                    <span className="text-primary">$</span>{" "}
                    <span className="text-cyan">echo</span> $STATUS
                  </p>
                  <p className="text-chart-2">Available for opportunities</p>

                  <p className="mt-4">
                    <span className="text-primary">$</span>{" "}
                    <span className="animate-pulse">_</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative overflow-hidden rounded-xl border border-border bg-card/30 p-6 backdrop-blur-sm sm:p-8">
            {/* Corner decoration */}
            <div className="absolute right-0 top-0 h-24 w-24">
              <div className="absolute right-3 top-3 h-full w-full border-r-2 border-t-2 border-primary/20" />
            </div>

            <h3 className="mb-6 text-xl font-semibold text-foreground">
              Send a Message
            </h3>

            {error && (
              <div className="mb-4 rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">
                {error}
              </div>
            )}

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-chart-2/30 bg-chart-2/10">
                  <Send className="h-7 w-7 text-chart-2" />
                </div>
                <h4 className="mb-2 text-lg font-semibold text-foreground">
                  Message Sent!
                </h4>
                <p className="text-muted-foreground">
                  Thank you for reaching out. I will get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    required
                    className="border-border bg-background/50 focus:border-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    required
                    className="border-border bg-background/50 focus:border-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    required
                    className="border-border bg-background/50 focus:border-primary"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
