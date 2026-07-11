"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink } from "lucide-react";

interface Certification {
  title: string;
  organization: string;
  date: string;
  skills: string[];
  link?: string;
}

const certifications: Certification[] = [
  {
    title: "Oracle Cloud Infrastructure — Generative AI Certified",
    organization: "Oracle",
    date: "2025",
    skills: ["LLM Internals", "Fine-tuning", "RAG", "OCI GenAI"],
    link: "#",
  },
];

export function CertificationsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" ref={ref} className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3 block">
            Certifications
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            Continuous learning
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group p-5 rounded-xl bg-surface border border-border/50 hover:border-primary/30 hover:shadow-[0_8px_30px_rgba(139,92,246,0.08)] transition-all duration-300"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <Award size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-text-primary leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-text-muted mt-1">
                    {cert.organization} · {cert.date}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-surface-elevated text-text-secondary"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-text-muted hover:text-primary transition-colors"
                >
                  <ExternalLink size={11} />
                  View Certificate
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
