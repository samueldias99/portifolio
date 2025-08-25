import React from "react";
import HeroSection from "./components/portfolio/HeroSection";
import AboutSection from "./components/portfolio/AboutSection";
import SkillsSection from "./components/portfolio/SkillsSection";
import TryHackMeSection from "./components/portfolio/TryHackMeSection";
import CoursesSection from "./components/portfolio/CoursesSection";
import ContactSection from "./components/portfolio/ContactSection";

export default function Home() {
  return (
    <div className="space-y-0">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <TryHackMeSection />
      <CoursesSection />
      <ContactSection />
    </div>
  );
}