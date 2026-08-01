"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Play,
  CheckCircle,
  Lightbulb,
  AlertTriangle,
  BookOpen,
} from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import { projects } from "@/data/projects";

export default function ProjectPageClient({ slug }: { slug: string }) {
  const router = useRouter();

  const project = useMemo(
    () => projects.find((p) => p.slug === slug),
    [slug]
  );

  const projectIndex = useMemo(
    () => projects.findIndex((p) => p.slug === slug),
    [slug]
  );

  const prevProject =
    projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject =
    projectIndex < projects.length - 1
      ? projects[projectIndex + 1]
      : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <button
            onClick={() => router.push("/")}
            className="text-primary hover:underline"
          >
            Go back home
          </button>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24"
    >
      <div className="max-w-4xl mx-auto px-6 pb-24">
        <button
          onClick={() => router.push("/#projects")}
          className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
              {project.category}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-text-secondary">
            {project.shortDescription}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative aspect-video rounded-2xl overflow-hidden bg-surface border border-border/50 mb-12"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/5" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl font-bold gradient-text opacity-20">
              {project.title.charAt(0)}
            </span>
          </div>
        </motion.div>

        <div className="flex flex-wrap gap-3 mb-12">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium bg-surface border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
            >
              <GithubIcon size={16} />
              View Source
            </a>
          )}
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium bg-primary text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
          {project.videoDemo && (
            <a
              href={project.videoDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium bg-surface border border-border hover:border-secondary/50 hover:bg-secondary/5 transition-all duration-300"
            >
              <Play size={16} />
              Video Demo
            </a>
          )}
        </div>

        <div className="space-y-12">
          <Section icon={BookOpen} title="About the Project">
            <p className="text-text-secondary leading-relaxed">
              {project.description}
            </p>
          </Section>

          <Section icon={Lightbulb} title="Problem Statement">
            <p className="text-text-secondary leading-relaxed">
              {project.problemStatement}
            </p>
          </Section>

          <Section icon={CheckCircle} title="Solution">
            <p className="text-text-secondary leading-relaxed">
              {project.solution}
            </p>
          </Section>

          <Section icon={CheckCircle} title="Key Features">
            <ul className="space-y-3">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-text-secondary"
                >
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </Section>

          <Section icon={AlertTriangle} title="Challenges">
            <ul className="space-y-3">
              {project.challenges.map((challenge) => (
                <li
                  key={challenge}
                  className="flex items-start gap-3 text-text-secondary"
                >
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                  {challenge}
                </li>
              ))}
            </ul>
          </Section>

          <Section icon={BookOpen} title="Learnings">
            <ul className="space-y-3">
              {project.learnings.map((learning) => (
                <li
                  key={learning}
                  className="flex items-start gap-3 text-text-secondary"
                >
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary-light flex-shrink-0" />
                  {learning}
                </li>
              ))}
            </ul>
          </Section>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-4">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-sm rounded-lg bg-surface border border-border text-text-secondary hover:border-primary/30 hover:text-primary transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/50">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-6">
            Related Projects
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prevProject && (
              <button
                onClick={() =>
                  router.push(`/projects/${prevProject.slug}`)
                }
                className="group p-5 rounded-xl bg-surface border border-border/50 hover:border-primary/30 text-left transition-all duration-300"
              >
                <div className="flex items-center gap-2 text-xs text-text-muted mb-2">
                  <ArrowLeft size={12} />
                  Previous
                </div>
                <div className="font-semibold text-sm text-text-primary group-hover:text-primary transition-colors">
                  {prevProject.title}
                </div>
              </button>
            )}
            {nextProject && (
              <button
                onClick={() =>
                  router.push(`/projects/${nextProject.slug}`)
                }
                className="group p-5 rounded-xl bg-surface border border-border/50 hover:border-primary/30 text-left transition-all duration-300 sm:ml-auto sm:text-right"
              >
                <div className="flex items-center gap-2 text-xs text-text-muted mb-2 sm:justify-end">
                  Next
                  <ArrowRight size={12} />
                </div>
                <div className="font-semibold text-sm text-text-primary group-hover:text-primary transition-colors">
                  {nextProject.title}
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Section({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <Icon size={16} className="text-primary" />
        <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
      </div>
      {children}
    </div>
  );
}
