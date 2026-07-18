import React from "react";
import { profileData } from "../data";
import { User, Sparkles, Brain, Award, GraduationCap } from "lucide-react";
import { motion } from "motion/react";

export const About: React.FC = () => {
  const { aboutText } = profileData;

  const corePillars = [
    {
      icon: <Brain className="text-blue-600 dark:text-blue-400" size={22} />,
      title: "Engineer's Discipline",
      desc: "An analytical mind focused on structured code, precise timing, and database queries."
    },
    {
      icon: <Sparkles className="text-indigo-600 dark:text-indigo-400" size={22} />,
      title: "UI/UX Obsession",
      desc: "Deep visual sensitivity, user-centered wireframing, and interactive layouts."
    },
    {
      icon: <User className="text-violet-600 dark:text-violet-400" size={22} />,
      title: "Problem Solver",
      desc: "Dedicated to solving real-world difficulties such as sign language translations and audio-to-text formatting."
    },
    {
      icon: <GraduationCap className="text-emerald-600 dark:text-emerald-400" size={22} />,
      title: "Continuous Learner",
      desc: "Fast tool onboarding, constant reading, and active engagement in hackathons and publishing."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h3 className="text-blue-600 dark:text-blue-400 font-display font-semibold text-sm tracking-wider uppercase">
            About Me
          </h3>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-slate-900 dark:text-white">
            Blending Engineering Precision with Elegant UX Design
          </h2>
          <div className="w-12 h-1 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Text Block */}
          <div className="lg:col-span-6 space-y-6">
            <h4 className="text-xl font-display font-bold text-slate-800 dark:text-white flex items-center gap-2">
              <User size={20} className="text-blue-600 dark:text-blue-400" />
              My Professional Story
            </h4>
            
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-light text-base">
              {aboutText}
            </p>

            <div className="p-5 rounded-2xl glass border border-blue-100 dark:border-blue-500/10 dark:bg-blue-500/5 bg-blue-50/40">
              <h5 className="font-display font-semibold text-slate-800 dark:text-slate-100 flex items-center gap-2 mb-2 text-sm">
                <Sparkles size={16} className="text-blue-600 dark:text-blue-400" />
                Why This Role?
              </h5>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                I am looking for a hands-on, real-world design environment to turn my foundation into real, studio-level practice. My combination of hardware training, SQL/Database foundation, Java background, and certified UI/UX design thinking makes me uniquely suited to build cohesive full-stack layouts that aren't just pretty, but functional.
              </p>
            </div>
          </div>

          {/* Right Core Pillars Bento Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {corePillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 rounded-2xl glass-card hover:border-blue-400/40 dark:hover:border-blue-400/20 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 w-fit transition-transform group-hover:scale-110">
                    {pillar.icon}
                  </div>
                  <h4 className="font-display font-semibold text-slate-800 dark:text-slate-100 text-sm">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
