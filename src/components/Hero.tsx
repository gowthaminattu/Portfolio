import React, { useEffect, useState } from "react";
import { profileData } from "../data";
import { Github, Linkedin, Mail, ArrowRight, Terminal, Award } from "lucide-react";
import { motion } from "motion/react";

export const Hero: React.FC = () => {
  const { name, titles, bio, email, linkedin, github, avatarUrl } = profileData;
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Multi-fallback for Google Drive images to bypass cookie/referrer restrictions in iframes
  const driveId = "1FpeAOjGIFJf-A0CwyfEnO9ziF3LlUd7k";
  const imageSources = [
    avatarUrl,
    `https://lh3.googleusercontent.com/d/${driveId}`,
    `https://drive.google.com/thumbnail?id=${driveId}&sz=w1000`,
    `https://drive.google.com/uc?export=view&id=${driveId}`,
    `https://docs.google.com/uc?export=view&id=${driveId}`,
    `https://picsum.photos/seed/gowthami/400/400`
  ];
  const [imgSrcIndex, setImgSrcIndex] = useState(0);

  // Hardcoded optimal adjustments and background style for the custom profile avatar
  const scale = 0.9;
  const offsetX = 0;
  const offsetY = 25;
  const rotate = 0;
  const bgTheme = "sunset";

  const bgGradients: Record<string, { bg: string; glow: string; border: string; label: string }> = {
    "sunset": {
      bg: "bg-gradient-to-tr from-rose-500/80 via-pink-500/80 to-orange-400/80",
      glow: "from-rose-500 via-pink-500 to-orange-400",
      border: "border-rose-500/40",
      label: "Warm Sunset"
    },
    "blue-indigo": {
      bg: "bg-gradient-to-tr from-blue-600/80 to-indigo-600/80",
      glow: "from-blue-500 to-indigo-500",
      border: "border-blue-500/40",
      label: "Tech Blue"
    },
    "emerald": {
      bg: "bg-gradient-to-tr from-emerald-500/80 to-teal-500/80",
      glow: "from-emerald-500 to-teal-500",
      border: "border-emerald-500/40",
      label: "Teal Mint"
    },
    "cosmic": {
      bg: "bg-gradient-to-tr from-violet-600/80 via-purple-600/80 to-fuchsia-500/80",
      glow: "from-violet-600 via-purple-600 to-fuchsia-500",
      border: "border-purple-500/40",
      label: "Cosmic Purple"
    },
    "amber": {
      bg: "bg-gradient-to-tr from-amber-500/80 to-red-500/80",
      glow: "from-amber-500 to-red-500",
      border: "border-amber-500/40",
      label: "Vibrant Amber"
    }
  };

  // Smooth typing effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = titles[currentTitleIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        setTypingSpeed(40);
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        setTypingSpeed(100);
      }, typingSpeed);
    }

    if (!isDeleting && displayedText === fullText) {
      timer = setTimeout(() => setIsDeleting(true), 1500); // Wait before starting delete
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTitleIndex, titles]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 pb-16 md:py-32 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 text-xs font-semibold border border-blue-200 dark:border-blue-500/20 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
              Available for Internships & Projects
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-2.5">
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-slate-500 dark:text-slate-400 font-display font-medium text-lg md:text-xl tracking-tight"
              >
                Hi there, I'm
              </motion.h2>
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-slate-900 dark:text-white"
              >
                {name}
              </motion.h1>

              {/* Typing Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="h-8 md:h-10 flex items-center justify-center lg:justify-start"
              >
                <span className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-600 dark:from-blue-400 dark:via-indigo-400 dark:to-violet-400 bg-clip-text text-transparent">
                  {displayedText}
                </span>
                <span className="w-0.5 h-6 bg-blue-600 dark:bg-blue-400 ml-1.5 animate-pulse" />
              </motion.div>
            </div>

            {/* Short Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg md:text-xl font-bold text-blue-600 dark:text-blue-400 max-w-xl leading-relaxed"
            >
              {bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <button
                onClick={() => {
                  const contactSec = document.getElementById("contact");
                  contactSec?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600 font-semibold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer group"
              >
                Contact Me
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>

            {/* Social Icons Links */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-4 pt-4"
            >
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-slate-100 hover:bg-blue-100 dark:bg-slate-800/60 dark:hover:bg-slate-800 transition-all text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 hover:-translate-y-1 shadow-sm"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </a>
              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-slate-100 hover:bg-blue-100 dark:bg-slate-800/60 dark:hover:bg-slate-800 transition-all text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 hover:-translate-y-1 shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${email}`}
                className="p-3 rounded-full bg-slate-100 hover:bg-blue-100 dark:bg-slate-800/60 dark:hover:bg-slate-800 transition-all text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 hover:-translate-y-1 shadow-sm"
                aria-label="Email Me"
              >
                <Mail size={18} />
              </a>
            </motion.div>

          </div>

          {/* Right Image Avatar */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 group"
            >
              {/* Outer Decorative Rotating Ring with customizable border color based on theme */}
              <div className={`absolute inset-0 rounded-full border-2 border-dashed ${
                bgTheme === "sunset" ? "border-rose-500/30 dark:border-rose-400/30" :
                bgTheme === "blue-indigo" ? "border-blue-500/30 dark:border-blue-400/30" :
                bgTheme === "emerald" ? "border-emerald-500/30 dark:border-emerald-400/30" :
                bgTheme === "cosmic" ? "border-purple-500/30 dark:border-purple-400/30" :
                "border-amber-500/30 dark:border-amber-400/30"
              } animate-[spin_40s_linear_infinite]`} />
              
              {/* Floating Glow Behind Image */}
              <div className={`absolute inset-6 rounded-full bg-gradient-to-tr ${bgGradients[bgTheme]?.glow || "from-blue-500 to-indigo-500"} blur-2xl opacity-25 group-hover:opacity-45 transition-all duration-500`} />
              
              {/* Avatar Image Container with Chosen Backdrop Gradient */}
              <div className={`absolute inset-3 rounded-full overflow-hidden border-4 border-white dark:border-slate-900 shadow-xl transition-all duration-500 flex flex-col items-center justify-center ${bgGradients[bgTheme]?.bg || "bg-slate-100 dark:bg-slate-800"}`}>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:16px_16px] rounded-full" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/10 to-slate-950/30 rounded-full" />
                
                {/* Profile Image with multi-source fallback */}
                {imgSrcIndex < imageSources.length ? (
                  <img
                    src={imageSources[imgSrcIndex]}
                    alt={`${name} - Profile`}
                    className="absolute inset-0 w-full h-full object-cover rounded-full z-10"
                    style={{
                      transform: `scale(${scale}) translate(${offsetX}px, ${offsetY}px) rotate(${rotate}deg)`,
                    }}
                    onError={() => setImgSrcIndex((prev) => prev + 1)}
                    draggable={false}
                  />
                ) : (
                  /* Fallback: Visual Typography Symbol if all image sources fail */
                  <div className="relative z-10 flex flex-col items-center justify-center text-white text-center">
                    <span className="text-7xl sm:text-8xl font-display font-extrabold tracking-tighter drop-shadow-lg select-none bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
                      GN
                    </span>
                    <div className="mt-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-[10px] font-mono tracking-widest uppercase font-semibold text-white/90">
                      &lt;DEVELOPER /&gt;
                    </div>
                  </div>
                )}
                
                {/* Subtly moving background elements */}
                <div className="absolute -right-4 -bottom-4 w-28 h-28 bg-white/10 rounded-full blur-xl animate-pulse" />
                <div className="absolute -left-4 -top-4 w-28 h-28 bg-white/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: "2s" }} />
              </div>

              {/* Float Mini badges */}
              <div className="absolute top-[15%] -left-[5%] p-3 rounded-2xl glass shadow-md flex items-center gap-2 hover:-translate-y-1 transition-all animate-float">
                <div className="p-1.5 rounded-lg bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  <Terminal size={16} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-slate-400">Engineer</p>
                  <p className="text-xs font-semibold text-slate-800 dark:text-slate-100">ECE Core</p>
                </div>
              </div>

              <div className="absolute bottom-[10%] -right-[5%] p-3 rounded-2xl glass shadow-md flex items-center gap-2 hover:-translate-y-1 transition-all animate-float" style={{ animationDelay: "3s" }}>
                <div className="p-1.5 rounded-lg bg-indigo-100 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                  <Award size={16} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-slate-400">Certified</p>
                  <p className="text-xs font-semibold text-slate-800 dark:text-slate-100">UI/UX Pro</p>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
