import React from "react";
import { experiencesData } from "../data";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 relative scroll-mt-12 bg-slate-100/30 dark:bg-slate-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h3 className="text-blue-600 dark:text-blue-400 font-display font-semibold text-sm tracking-wider uppercase">
            My Experience
          </h3>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-slate-900 dark:text-white">
            Internship Journey & Corporate Exposures
          </h2>
          <div className="w-12 h-1 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-3xl mx-auto pl-6 sm:pl-8 border-l-2 border-slate-200 dark:border-slate-800 space-y-12 py-4">
          {experiencesData.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative space-y-3 group"
            >
              
              {/* Timeline Bullet Ring Indicator */}
              <div className="absolute -left-[35px] sm:-left-[43px] p-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0b0f19] text-blue-600 dark:text-blue-400 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-500 dark:group-hover:text-slate-950 transition-all duration-300">
                <Briefcase size={14} />
              </div>

              {/* Header block */}
              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h4 className="font-display font-bold text-base md:text-lg text-slate-800 dark:text-white leading-tight">
                    {exp.role}
                  </h4>
                  <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-mono font-medium text-slate-500 dark:text-slate-400">
                    <Calendar size={12} className="text-blue-500" />
                    {exp.duration}
                  </span>
                </div>
                
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  {exp.company}
                </p>
              </div>

              {/* Responsibilities */}
              <ul className="space-y-2 text-xs md:text-sm font-light text-slate-600 dark:text-slate-300 leading-relaxed">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 size={15} className="text-blue-500 dark:text-blue-400 mt-0.5 shrink-0" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
