import React, { useEffect, useState } from "react";
import { ThemeProvider } from "./components/ThemeContext";
import { BackgroundEffect } from "./components/BackgroundEffect";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Certifications } from "./components/Certifications";
import { Achievements } from "./components/Achievements";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ArrowUp, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Splash Screen Timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ThemeProvider>
      {/* Background canvas effects */}
      <BackgroundEffect />

      <AnimatePresence mode="wait">
        {isLoading ? (
          /* Premium Loading Screen */
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-white"
          >
            <div className="relative flex flex-col items-center gap-6">
              {/* Spinning Logo Rings */}
              <div className="relative w-16 h-16">
                <span className="absolute inset-0 rounded-full border-2 border-t-blue-500 border-r-transparent border-b-transparent border-l-transparent animate-spin" />
                <span className="absolute inset-1.5 rounded-full border border-t-transparent border-r-indigo-500 border-b-transparent border-l-transparent animate-[spin_1.5s_linear_infinite]" style={{ animationDirection: "reverse" }} />
                <div className="absolute inset-3 rounded-full bg-slate-900 flex items-center justify-center">
                  <Sparkles size={14} className="text-blue-400 animate-pulse" />
                </div>
              </div>

              {/* Text Taglines */}
              <div className="text-center space-y-1">
                <h3 className="font-display font-bold text-sm tracking-wide">
                  GOWTHAMI N
                </h3>
                <p className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">
                  UI/UX & Software Development
                </p>
              </div>
            </div>
          </motion.div>
        ) : (
          /* Core Portfolio Body */
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen relative text-slate-800 dark:text-slate-100 selection:bg-blue-600/20 selection:text-blue-600 dark:selection:text-blue-400 font-sans antialiased"
          >
            {/* Header Sticky Nav */}
            <Navbar />

            {/* Layout Main Stream */}
            <main className="relative z-10">
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Education />
              <Certifications />
              <Achievements />
              <Contact />
            </main>

            {/* Sticky Footnotes */}
            <Footer />

            {/* Floating Quick Back To Top Action */}
            <AnimatePresence>
              {showScrollTop && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 10 }}
                  onClick={scrollToTop}
                  className="fixed bottom-6 right-6 z-30 p-3 rounded-2xl bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 cursor-pointer hover:-translate-y-0.5"
                  aria-label="Back to top"
                >
                  <ArrowUp size={18} />
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}
