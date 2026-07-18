import React from "react";
import { skillsData } from "../data";
import {
  Layers,
  Brain,
  Users,
  PenTool,
  Layout,
  Palette,
  Code,
  Database,
  Server,
  Braces,
  Atom,
  Wind,
  Cpu,
  Eye,
  Cloud,
  GitBranch,
  Wrench
} from "lucide-react";
import { motion } from "motion/react";

// Dynamic Icon Mapper
const IconMapper: React.FC<{ name: string; size?: number; className?: string }> = ({
  name,
  size = 20,
  className
}) => {
  switch (name) {
    case "Layers":
      return <Layers size={size} className={className} />;
    case "Brain":
      return <Brain size={size} className={className} />;
    case "Users":
      return <Users size={size} className={className} />;
    case "PenTool":
      return <PenTool size={size} className={className} />;
    case "Layout":
      return <Layout size={size} className={className} />;
    case "Palette":
      return <Palette size={size} className={className} />;
    case "Code":
      return <Code size={size} className={className} />;
    case "Database":
      return <Database size={size} className={className} />;
    case "Server":
      return <Server size={size} className={className} />;
    case "Braces":
      return <Braces size={size} className={className} />;
    case "Atom":
      return <Atom size={size} className={className} />;
    case "Wind":
      return <Wind size={size} className={className} />;
    case "Cpu":
      return <Cpu size={size} className={className} />;
    case "Eye":
      return <Eye size={size} className={className} />;
    case "Cloud":
      return <Cloud size={size} className={className} />;
    case "GitBranch":
      return <GitBranch size={size} className={className} />;
    default:
      return <Wrench size={size} className={className} />;
  }
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-28 relative scroll-mt-12 bg-slate-100/30 dark:bg-slate-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h3 className="text-blue-600 dark:text-blue-400 font-display font-semibold text-sm tracking-wider uppercase">
            My Skills
          </h3>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-slate-900 dark:text-white">
            Professional Toolkit & Competencies
          </h2>
          <div className="w-12 h-1 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {skillsData.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="p-6 rounded-2xl glass-card border border-slate-200/50 dark:border-slate-800/50 shadow-sm space-y-6"
            >
              <h4 className="font-display font-bold text-lg text-slate-800 dark:text-white pb-3 border-b border-slate-200/30 dark:border-slate-800/30 flex items-center gap-2">
                <span className="w-1.5 h-4 rounded bg-blue-600 dark:bg-blue-500 inline-block" />
                {category.title}
              </h4>

              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5 group">
                    <div className="flex justify-between items-center text-xs font-semibold">
                      <span className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                        <IconMapper
                          name={skill.iconName}
                          size={15}
                          className="text-blue-600 dark:text-blue-400 transition-transform group-hover:scale-110"
                        />
                        {skill.name}
                      </span>
                      <span className="text-slate-500 dark:text-slate-400 font-mono">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-500 dark:to-indigo-400 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
