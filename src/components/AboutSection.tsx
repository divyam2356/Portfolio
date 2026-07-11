"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3 block">
            About
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            A bit about me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <p className="text-lg text-text-secondary leading-relaxed">
              I&apos;m{" "}
              <span className="text-text-primary font-medium">
                Divyam Singh
              </span>
              , an{" "}
              <span className="text-text-primary font-medium">
                AI Engineer
              </span>{" "}
              with deep expertise in{" "}
              <span className="text-primary font-medium">
                Transformer architectures
              </span>
              ,{" "}
              <span className="text-secondary font-medium">
                computer vision
              </span>
              , and{" "}
              <span className="text-primary font-medium">
                agentic AI systems
              </span>
              . I&apos;ve built a 19.3M parameter LLM from scratch and
              specialize in video analytics and real-time AI pipelines.
            </p>
            <p className="text-text-secondary leading-relaxed">
              From training custom Transformers with CUDA-optimized attention to
              architecting full-stack applications with real-time AI workflows, I
              work at the intersection of{" "}
              <span className="text-primary font-medium">deep learning research</span> and{" "}
              <span className="text-secondary font-medium">production engineering</span>.
              I believe the best AI systems are built by understanding the math
              deeply and shipping with reliability.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Currently an AI Engineer intern at Graymatics, building
              CCTV-based intrusion detection with YOLOv8 and containerized
              deployment pipelines. Previously at Gluck, I architected a
              freelance platform for 200+ users with real-time AI features.
              I hold a B.E. in Computer Engineering from I2IT, Pune.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { value: "19.3M", label: "Params in Custom LLM" },
                { value: "3+", label: "AI/ML Projects" },
                { value: "200+", label: "Users Served" },
                { value: "40%", label: "Engagement Boost" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-xl bg-surface border border-border/50"
                >
                  <div className="text-2xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-xs text-text-muted mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/5 animate-gradient" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[90%] h-[90%] rounded-2xl bg-surface border border-border/50 flex items-center justify-center overflow-hidden">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <span className="text-3xl font-bold text-white">DS</span>
                    </div>
                    <p className="text-sm font-medium text-text-primary mb-1">
                      Divyam Singh
                    </p>
                    <p className="text-xs text-text-secondary">
                      AI Engineer &amp; Developer
                    </p>
                    <div className="flex justify-center gap-2 mt-3">
                      {["PyTorch", "Next.js", "CUDA"].map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[9px] rounded-md bg-primary/10 text-primary border border-primary/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-primary/10 animate-float"
                  style={{
                    width: 8 + i * 4,
                    height: 8 + i * 4,
                    top: `${20 + i * 25}%`,
                    right: `${-5 + i * 3}%`,
                    animationDelay: `${i * 2}s`,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
