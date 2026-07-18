import React, { useState } from "react";
import { projectsData } from "../data";
import { Project } from "../types";
import { Github, ExternalLink, Code2, Sparkles, ChevronRight, X, Globe, Cpu, Mic } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const ProjectGraphic: React.FC<{ project: Project }> = ({ project }) => {
  let gradientClass = "from-blue-600 via-indigo-600 to-violet-700";
  let IconComponent = Code2;

  if (project.title.toLowerCase().includes("campusos")) {
    gradientClass = "from-blue-600 via-indigo-600 to-violet-700";
    IconComponent = Globe;
  } else if (project.title.toLowerCase().includes("sign language")) {
    gradientClass = "from-emerald-500 via-teal-600 to-cyan-700";
    IconComponent = Cpu;
  } else if (project.title.toLowerCase().includes("audio to text")) {
    gradientClass = "from-rose-500 via-pink-600 to-purple-700";
    IconComponent = Mic;
  }

  return (
    <div className={`w-full h-full bg-gradient-to-br ${gradientClass} flex flex-col items-center justify-center p-6 text-white relative overflow-hidden select-none`}>
      {/* Abstract Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
      <div className="absolute -left-10 -top-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />

      {/* Floating Graphic Element */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-3">
        <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg scale-105 group-hover:scale-110 transition-transform duration-500">
          <IconComponent size={32} className="text-white" />
        </div>
        <div className="space-y-1">
          <span className="text-[10px] uppercase tracking-widest text-white/90 font-bold bg-white/10 px-2.5 py-0.5 rounded-full backdrop-blur-sm border border-white/10">
            {project.category === "web" ? "Web OS" : "Interactive Tool"}
          </span>
          <p className="font-display font-bold text-sm tracking-wide text-white drop-shadow-sm line-clamp-1">
            {project.title.split("—")[0].trim()}
          </p>
        </div>
      </div>
    </div>
  );
};

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projectsData;

  return (
    <section id="projects" className="py-20 md:py-28 relative scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h3 className="text-blue-600 dark:text-blue-400 font-display font-semibold text-sm tracking-wider uppercase">
            My Portfolio
          </h3>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-slate-900 dark:text-white">
            Recent Projects & Visual Prototypes
          </h2>
          <div className="w-12 h-1 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full mt-4" />
        </div>



        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="group flex flex-col rounded-2xl overflow-hidden border border-slate-200/50 dark:border-slate-800/40 glass-card hover:border-blue-400/30 dark:hover:border-blue-500/20 hover:shadow-xl transition-all duration-300 h-full relative"
              >
                
                {/* Project Image Frame */}
                <div className="h-48 w-full overflow-hidden relative bg-slate-100 dark:bg-slate-800">
                  <ProjectGraphic project={project} />
                  
                  {/* Category Badge overlay */}
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border border-white/10 z-20">
                    {project.category === "web" && "Web Application"}
                    {project.category === "uiux" && "UI/UX Design"}
                    {project.category === "embedded" && "Embedded & IoT"}
                    {project.category === "other" && "Scientific Lab / Tool"}
                  </div>
                </div>

                {/* Content Block */}
                <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-display font-bold text-base text-slate-800 dark:text-white leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 text-[10px] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Bars */}
                  <div className="pt-4 border-t border-slate-200/30 dark:border-slate-800/30 flex items-center justify-between">
                    
                    {/* View details button triggers detailed modal */}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-0.5 cursor-pointer"
                    >
                      View Details
                      <ChevronRight size={14} />
                    </button>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
                          title="GitHub Repository"
                        >
                          <Github size={16} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-blue-600 dark:text-blue-400"
                          title="Live Demo"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>

                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Project Details Modal Overlay */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              
              {/* Blur backdrop overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
              />

              {/* Modal Core Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ duration: 0.25 }}
                className="relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl border border-slate-200 dark:border-slate-800 z-10 max-h-[90vh] flex flex-col"
              >
                
                {/* Image & Close Header */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <ProjectGraphic project={selectedProject} />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white cursor-pointer transition-colors z-20"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Content Panel Scrollable */}
                <div className="p-6 md:p-8 overflow-y-auto space-y-6 flex-grow">
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-display font-bold text-slate-900 dark:text-white leading-tight">
                      {selectedProject.title}
                    </h3>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {selectedProject.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 text-slate-600 dark:text-slate-300 leading-relaxed font-light text-sm">
                    <h5 className="font-display font-semibold text-slate-800 dark:text-white flex items-center gap-1.5 text-xs tracking-wider uppercase pb-1 border-b dark:border-slate-800 border-slate-100">
                      <Code2 size={14} className="text-blue-500" />
                      About The Project
                    </h5>
                    <p>{selectedProject.description}</p>
                  </div>

                  {selectedProject.features && (
                    <div className="space-y-2">
                      <h5 className="font-display font-semibold text-slate-800 dark:text-white flex items-center gap-1.5 text-xs tracking-wider uppercase pb-1 border-b dark:border-slate-800 border-slate-100">
                        <Sparkles size={14} className="text-blue-500" />
                        Key Deliverables & UX Decisions
                      </h5>
                      <ul className="space-y-1.5 list-none pl-0">
                        {selectedProject.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs font-light text-slate-500 dark:text-slate-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Modal Action Footer */}
                  <div className="pt-4 border-t dark:border-slate-800 border-slate-100 flex flex-col sm:flex-row gap-3">
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-all shadow-md cursor-pointer flex-1"
                      >
                        <ExternalLink size={14} />
                        Launch Live Demo
                      </a>
                    )}
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-xs transition-all cursor-pointer flex-1"
                      >
                        <Github size={14} />
                        GitHub Repository
                      </a>
                    )}
                  </div>

                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
