import React from "react";
import { educationData } from "../data";
import { GraduationCap, Calendar, Award } from "lucide-react";
import { motion } from "motion/react";

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 relative scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h3 className="text-blue-600 dark:text-blue-400 font-display font-semibold text-sm tracking-wider uppercase">
            Education
          </h3>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-slate-900 dark:text-white">
            Academic Background & Foundation
          </h2>
          <div className="w-12 h-1 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {educationData.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 md:p-8 rounded-3xl glass-card border border-slate-200/40 dark:border-slate-800/40 hover:border-blue-400/30 dark:hover:border-blue-500/20 hover:shadow-lg transition-all duration-300 relative overflow-hidden group flex flex-col justify-between"
            >
              
              {/* Card Accent Glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 dark:bg-blue-500/10 rounded-bl-full transition-transform group-hover:scale-110" />

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <GraduationCap size={22} />
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-mono font-medium text-slate-500 dark:text-slate-400 mb-0.5">
                      <Calendar size={12} />
                      {edu.year}
                    </span>
                    <h4 className="font-display font-bold text-base md:text-lg text-slate-800 dark:text-white leading-tight">
                      {edu.degree}
                    </h4>
                  </div>
                </div>

                <div className="space-y-1.5 pl-1">
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    {edu.institution}
                  </p>
                  {edu.university && (
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-light">
                      Affiliated to {edu.university}
                    </p>
                  )}
                </div>
              </div>

              {/* performance badge */}
              <div className="mt-6 pt-4 border-t border-slate-200/30 dark:border-slate-800/30 flex items-center justify-between">
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Performance Score:
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 text-xs font-bold font-mono">
                  <Award size={14} />
                  {edu.cgpaOrPercentage}
                </span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
