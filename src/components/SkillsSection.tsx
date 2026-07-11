"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SkillGroup {
  category: string;
  skills: { name: string; icon: string }[];
}

const skillGroups: SkillGroup[] = [
  {
    category: "AI/ML & LLMs",
    skills: [
      { name: "Python", icon: "🐍" },
      { name: "PyTorch", icon: "🔥" },
      { name: "CUDA", icon: "⚡" },
      { name: "Transformers", icon: "🧠" },
      { name: "Agentic AI", icon: "🤖" },
      { name: "RAG", icon: "🔗" },
      { name: "CLIP", icon: "👁" },
      { name: "YOLOv8", icon: "🎯" },
      { name: "Computer Vision", icon: "📸" },
      { name: "Multi-Agent Systems", icon: "🤝" },
    ],
  },
  {
    category: "Data & ML Ops",
    skills: [
      { name: "Pandas", icon: "🐼" },
      { name: "NumPy", icon: "🔢" },
      { name: "OpenCV", icon: "📷" },
      { name: "Scikit-learn", icon: "📊" },
      { name: "Feature Engineering", icon: "⚙️" },
      { name: "Time-Series", icon: "📈" },
      { name: "Hugging Face", icon: "🤗" },
    ],
  },
  {
    category: "Backend & APIs",
    skills: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express.js", icon: "🚂" },
      { name: "FastAPI", icon: "⚡" },
      { name: "REST", icon: "🌐" },
      { name: "WebSockets", icon: "🔌" },
      { name: "Socket.io", icon: "💬" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "MongoDB", icon: "🍃" },
      { name: "Prisma", icon: "💎" },
    ],
  },
  {
    category: "Frontend & Infrastructure",
    skills: [
      { name: "Next.js", icon: "▲" },
      { name: "React", icon: "⚛️" },
      { name: "TypeScript", icon: "📘" },
      { name: "Docker", icon: "🐳" },
      { name: "AWS", icon: "☁️" },
      { name: "Vercel", icon: "▲" },
      { name: "Godot 4.x", icon: "🎮" },
      { name: "FFmpeg", icon: "🎬" },
      { name: "Git", icon: "🔀" },
    ],
  },
];

export function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3 block">
            Skills
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            Technologies I work with
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: groupIndex * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="p-6 rounded-2xl bg-surface border border-border/50 hover:border-primary/20 transition-colors duration-300"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: groupIndex * 0.1 + i * 0.03,
                    }}
                    className="group/skill relative flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-elevated border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 cursor-default"
                  >
                    <span className="text-sm">{skill.icon}</span>
                    <span className="text-sm text-text-secondary group-hover/skill:text-text-primary transition-colors">
                      {skill.name}
                    </span>
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-[10px] font-medium bg-surface-elevated border border-border rounded-md text-text-primary opacity-0 group-hover/skill:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                      {skill.name}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
