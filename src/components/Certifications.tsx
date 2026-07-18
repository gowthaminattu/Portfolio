import React from "react";
import { certificationsData } from "../data";
import { ShieldCheck, Calendar, Award, ExternalLink } from "lucide-react";
import { motion } from "motion/react";

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 md:py-28 relative scroll-mt-12 bg-slate-100/30 dark:bg-slate-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h3 className="text-blue-600 dark:text-blue-400 font-display font-semibold text-sm tracking-wider uppercase">
            Certifications
          </h3>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-slate-900 dark:text-white">
            Professional Licenses & Verification
          </h2>
          <div className="w-12 h-1 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certificationsData.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 rounded-2xl glass-card border border-slate-200/50 dark:border-slate-800/40 hover:border-blue-400/30 dark:hover:border-blue-500/20 hover:shadow-md transition-all duration-300 flex flex-col justify-between group h-full"
            >
              <div className="space-y-4">
                {/* Gold/Orange Certified Seal Badge */}
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 group-hover:scale-105 transition-transform">
                    <ShieldCheck size={20} />
                  </div>
                  <span className="text-[10px] sm:text-xs font-mono font-medium text-slate-400 dark:text-slate-500 flex items-center gap-1">
                    <Calendar size={12} />
                    {cert.date}
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="font-display font-bold text-sm sm:text-base text-slate-800 dark:text-white leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Issued by {cert.issuer}
                  </p>
                </div>
              </div>

              {/* Verified Ribbon Footer */}
              <div className="mt-6 pt-3 border-t border-slate-200/30 dark:border-slate-800/30 flex items-center justify-between">
                <span className="text-[10px] text-amber-600 dark:text-amber-400 font-semibold uppercase tracking-wider flex items-center gap-1">
                  <Award size={12} />
                  Verified Seal
                </span>
                <span className="text-xs text-slate-400 dark:text-slate-500 inline-flex items-center gap-0.5 group-hover:underline">
                  Credentials
                  <ExternalLink size={10} />
                </span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
