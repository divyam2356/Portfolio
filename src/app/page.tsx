"use client";

import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { CertificationsSection } from "@/components/CertificationsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsSection />
      <AboutSection />
      <SkillsSection />
      <CertificationsSection />
    </>
  );
}
