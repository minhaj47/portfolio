"use client";

import {
  AboutSection,
  AchievementsSection,
  BackgroundEffects,
  ContactSection,
  Footer,
  GreenconSection,
  HeroSection,
  JavaScriptSection,
  Navigation,
  ProjectsSection,
  ResearchSection,
  SkillsSection,
  TimelineSection,
} from "./components/sections";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Astronomic Background Effects */}
      <BackgroundEffects />

      {/* Navigation */}
      <Navigation />

      {/* Hero Section - Queen Cell Design */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Skills Section - Beehive Design */}
      <SkillsSection />

      {/* Experience Timeline Section */}
      <TimelineSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* JavaScript Deep Dive Section */}
      <JavaScriptSection />

      {/* Research & Thesis Section */}
      <ResearchSection />

      {/* Achievements Section */}
      <AchievementsSection />

      {/* Greencon Hackathon Section */}
      <GreenconSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
