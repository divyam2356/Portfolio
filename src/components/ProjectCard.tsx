"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative flex-shrink-0 w-[300px] sm:w-[340px] md:w-[380px] group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      layout
    >
      <Link href={`/projects/${project.slug}`}>
        <div className="relative rounded-xl overflow-hidden bg-surface border border-border/50 transition-all duration-500 hover:border-primary/30 hover:shadow-[0_8px_40px_rgba(139,92,246,0.12)]">
          <div className="relative aspect-video overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/5" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-4xl font-bold gradient-text opacity-30">
                {project.title.charAt(0)}
              </div>
            </div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"
              animate={{ opacity: hovered ? 0.9 : 0.6 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <div className="p-4">
            <h3 className="font-semibold text-sm text-text-primary mb-2 line-clamp-1">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-primary/10 text-primary/80 border border-primary/10"
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 3 && (
                <span className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-surface-elevated text-text-muted">
                  +{project.techStack.length - 3}
                </span>
              )}
            </div>
          </div>

          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-surface/95 backdrop-blur-sm rounded-xl flex flex-col justify-end p-5"
              >
                <p className="text-xs text-text-secondary mb-3 line-clamp-2">
                  {project.shortDescription}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  {project.github && (
                    <span className="flex items-center gap-1.5 text-xs text-text-secondary hover:text-primary transition-colors">
                      <GithubIcon size={13} />
                      Code
                    </span>
                  )}
                  {project.liveDemo && (
                    <span className="flex items-center gap-1.5 text-xs text-text-secondary hover:text-secondary transition-colors">
                      <ExternalLink size={13} />
                      Live
                    </span>
                  )}
                  <span className="ml-auto text-[11px] font-medium text-primary">
                    View Details →
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Link>
    </motion.div>
  );
}

export function ProjectRow({
  title,
  projects,
}: {
  title: string;
  projects: Project[];
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 400;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative group/row">
      <div className="mb-5 px-6">
        <h2 className="text-xl sm:text-2xl font-bold text-text-primary">
          {title}
        </h2>
      </div>

      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-0 bottom-0 z-10 w-12 bg-gradient-to-r from-background to-transparent flex items-center justify-start pl-1 opacity-0 group-hover/row:opacity-100 transition-opacity duration-300"
          aria-label="Scroll left"
        >
          <ChevronLeft size={20} className="text-text-secondary" />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto hide-scrollbar px-6 pb-4"
        >
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-0 bottom-0 z-10 w-12 bg-gradient-to-l from-background to-transparent flex items-center justify-end pr-1 opacity-0 group-hover/row:opacity-100 transition-opacity duration-300"
          aria-label="Scroll right"
        >
          <ChevronRight size={20} className="text-text-secondary" />
        </button>
      </div>
    </div>
  );
}
