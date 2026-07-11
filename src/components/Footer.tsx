"use client";

import { Mail, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

const socials = [
  { icon: GithubIcon, href: "https://github.com/divyam2356", label: "GitHub" },
  { icon: LinkedinIcon, href: "https://linkedin.com/in/dswebd", label: "LinkedIn" },
  { icon: Mail, href: "mailto:divyamsingh5003@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <footer id="contact" className="relative border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">
              <span className="gradient-text">Let&apos;s build</span> something great.
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed max-w-sm">
              AI Engineer specializing in Transformer architectures, computer
              vision, and agentic systems. Always open to new opportunities and
              interesting projects.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-4">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {["Home", "Projects", "About", "Skills"].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    document
                      .querySelector(`#${item.toLowerCase()}`)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-text-secondary text-sm hover:text-primary transition-colors text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-4">
              Connect
            </h4>
            <div className="flex gap-3 mb-6">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2.5 rounded-lg bg-surface border border-border hover:border-primary/50 hover:bg-primary/10 text-text-secondary hover:text-primary transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
            <a
              href="/resume.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-all duration-300"
            >
              <Download size={14} />
              Download Resume
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs">
            &copy; {new Date().getFullYear()} Divyam Singh. All rights reserved.
          </p>
          <p className="text-text-muted text-xs">
            Built with Next.js, Tailwind CSS &amp; Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
