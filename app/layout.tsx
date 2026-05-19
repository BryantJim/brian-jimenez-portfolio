import React from "react"
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Orbitron } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/contexts/language-context";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const _geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});
const _orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  title: "Anthony Brian Jimenez | Software Developer",
  description:
    "Systems Engineer with proven experience in software development, web applications, backend systems, and enterprise solutions. Based in Dominican Republic.",
  keywords: [
    "Software Developer",
    "Full Stack",
    "React",
    "C#",
    ".NET",
    "Web Development",
  ],
  authors: [{ name: "Anthony Brian Jiménez López" }],
  openGraph: {
    title: "Anthony Brian Jimenez | Software Developer",
    description:
      "Systems Engineer specializing in scalable software solutions",
    type: "website",
  },
    generator: 'v0.app'
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${_geist.variable} ${_geistMono.variable} ${_orbitron.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            {children}
            <Analytics />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
