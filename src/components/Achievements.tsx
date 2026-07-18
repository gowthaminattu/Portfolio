import React from "react";
import { achievementsData } from "../data";
import { Trophy, Award, BookOpen, Flame, Calendar, ExternalLink } from "lucide-react";
import { motion } from "motion/react";

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 md:py-28 relative scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h3 className="text-blue-600 dark:text-blue-400 font-display font-semibold text-sm tracking-wider uppercase">
            Achievements
          </h3>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-slate-900 dark:text-white">
            Hackathons, Publications & Recognition
          </h2>
          <div className="w-12 h-1 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievementsData.map((ach, i) => (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 md:p-8 rounded-3xl glass-card border border-slate-200/40 dark:border-slate-800/40 hover:border-blue-400/30 dark:hover:border-blue-500/20 hover:shadow-xl transition-all duration-300 relative overflow-hidden group flex flex-col justify-between"
            >
              
              {/* Card background icon watermarks */}
              <div className="absolute -bottom-8 -right-8 opacity-5 text-slate-400 group-hover:scale-110 group-hover:opacity-10 transition-all duration-500 pointer-events-none">
                {ach.type === "publication" && <BookOpen size={160} />}
                {ach.type === "hackathon" && <Flame size={160} />}
                {ach.type === "award" && <Trophy size={160} />}
              </div>

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    {/* Unique Icon based on type */}
                    {ach.type === "publication" && (
                      <div className="p-2.5 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                        <BookOpen size={20} />
                      </div>
                    )}
                    {ach.type === "hackathon" && (
                      <div className="p-2.5 rounded-2xl bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400">
                        <Flame size={20} />
                      </div>
                    )}
                    {ach.type === "award" && (
                      <div className="p-2.5 rounded-2xl bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400">
                        <Trophy size={20} />
                      </div>
                    )}
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      {ach.type === "publication" && "Research Publication"}
                      {ach.type === "hackathon" && "Hackathon Competitor"}
                      {ach.type === "award" && "Award Winner"}
                    </span>
                  </div>

                  <span className="text-[10px] sm:text-xs font-mono font-medium text-slate-400 dark:text-slate-500 flex items-center gap-1">
                    <Calendar size={12} />
                    {ach.date}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h4 className="font-display font-bold text-base md:text-lg text-slate-800 dark:text-white leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {ach.title}
                  </h4>
                  <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                    {ach.description}
                  </p>
                </div>
              </div>

              {ach.link && (
                <div className="mt-6 pt-4 border-t border-slate-200/30 dark:border-slate-800/30">
                  <a
                    href={ach.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                  >
                    View Publication / Source
                    <ExternalLink size={12} />
                  </a>
                </div>
              )}

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
