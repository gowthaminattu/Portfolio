import React from "react";
import { profileData } from "../data";
import { Github, Linkedin, Mail, Code2, ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const { name, github, linkedin, email } = profileData;

  const quickLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" }
  ];

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t dark:border-slate-800/80 border-slate-200/50 bg-slate-50/95 dark:bg-slate-950/95 backdrop-blur-md relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pb-8 border-b dark:border-slate-800/40 border-slate-200/30">
          
          {/* Logo Brand */}
          <div className="space-y-2">
            <button
              onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <div className="p-1.5 rounded-lg bg-blue-600 text-white dark:bg-blue-500 shadow-sm">
                <Code2 size={18} />
              </div>
              <span className="font-display font-bold text-lg tracking-tight text-slate-900 dark:text-white">
                Gowthami N
              </span>
            </button>
            <p className="text-sm text-blue-600 dark:text-blue-400 font-bold max-w-sm">
              Blending analytical engineering disciplines with elegant UI/UX layout systems.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-4 sm:gap-6">
            {quickLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" })}
                className="text-sm font-bold text-slate-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400 cursor-pointer transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-200/60 hover:bg-blue-100 dark:bg-slate-800/80 dark:hover:bg-slate-700 transition-colors text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
              aria-label="GitHub Profile"
            >
              <Github size={16} />
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-200/60 hover:bg-blue-100 dark:bg-slate-800/80 dark:hover:bg-slate-700 transition-colors text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={`mailto:${email}`}
              className="p-2 rounded-lg bg-slate-200/60 hover:bg-blue-100 dark:bg-slate-800/80 dark:hover:bg-slate-700 transition-colors text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
              aria-label="Email Me"
            >
              <Mail size={16} />
            </a>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xs text-slate-400 dark:text-slate-500 font-light">
            &copy; {new Date().getFullYear()} {name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-xs text-slate-400 dark:text-slate-500 font-light flex items-center gap-1">
              Made with <span className="text-red-500 animate-pulse">❤️</span> by Gowthami N
            </p>
            
            {/* Scroll Up Button */}
            <button
              onClick={scrollUp}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 dark:hover:bg-blue-500 text-slate-600 dark:text-slate-400 hover:text-white dark:hover:text-slate-950 transition-all cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
