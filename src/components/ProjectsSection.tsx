"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { categories, projects } from "@/data/projects";
import { ProjectRow } from "./ProjectCard";

export function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects = categories
    .map((cat) => ({
      ...cat,
      items: projects.filter((p) => p.category === cat.key),
    }))
    .filter((cat) => cat.items.length > 0);

  return (
    <section id="projects" ref={ref} className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto mb-12 px-6"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3 block">
          Portfolio
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
          Featured Projects
        </h2>
      </motion.div>

      <div className="space-y-16">
        {filteredProjects.map((cat, index) => (
          <motion.div
            key={cat.key}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <ProjectRow title={cat.label} projects={cat.items} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
