import React, { useState } from "react";
import { profileData } from "../data";
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquareCode, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const Contact: React.FC = () => {
  const { email, phone, location, linkedin, github, leetcode } = profileData;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Auto-reset status message after 4s
      setTimeout(() => setSubmitStatus("idle"), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative scroll-mt-12 bg-slate-100/30 dark:bg-slate-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h3 className="text-blue-600 dark:text-blue-400 font-display font-semibold text-sm tracking-wider uppercase">
            Contact
          </h3>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-slate-900 dark:text-white">
            Get In Touch
          </h2>
          <div className="w-12 h-1 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Details & Map */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <h4 className="text-xl font-display font-bold text-slate-800 dark:text-white flex items-center gap-2">
                <MessageSquareCode size={20} className="text-blue-600 dark:text-blue-400" />
                Contact Information
              </h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                Whether you have an internship opening, a freelance project, or just want to say hi, feel free to contact me. I usually respond within a few hours.
              </p>
            </div>

            {/* Quick Details List */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl glass-card border border-slate-200/40 dark:border-slate-800/40 hover:-translate-y-0.5 transition-transform duration-200">
                <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Email Me</p>
                  <a href={`mailto:${email}`} className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:underline">
                    {email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl glass-card border border-slate-200/40 dark:border-slate-800/40 hover:-translate-y-0.5 transition-transform duration-200">
                <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Call Me</p>
                  <a href={`tel:${phone}`} className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:underline">
                    +91 {phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl glass-card border border-slate-200/40 dark:border-slate-800/40 hover:-translate-y-0.5 transition-transform duration-200">
                <div className="p-3 rounded-xl bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Location</p>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {location}
                  </p>
                </div>
              </div>
            </div>

            {/* Embedded Google Map Placeholder Card */}
            <div className="rounded-3xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800/60 h-48 relative bg-slate-100 dark:bg-slate-900 flex items-center justify-center group">
              {/* Map background illustration (custom grid vector) */}
              <div className="absolute inset-0 bg-slate-200 dark:bg-slate-950 opacity-40 transition-opacity group-hover:opacity-50">
                <div className="w-full h-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] dark:bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:16px_16px]" />
              </div>
              
              <div className="absolute top-4 left-4 z-10 py-1.5 px-3 rounded-full bg-slate-900/80 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                <MapPin size={12} className="text-red-500 animate-bounce" />
                Karur / Palani, Tamil Nadu
              </div>

              {/* Visualized coordinates radar */}
              <div className="relative flex items-center justify-center z-10">
                <span className="absolute inline-flex h-12 w-12 rounded-full bg-blue-500/20 dark:bg-blue-500/40 animate-ping" />
                <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-600 dark:bg-blue-400 shadow-md" />
              </div>

              <div className="absolute bottom-4 right-4 z-10">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(location)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-white text-slate-900 text-xs font-semibold shadow hover:bg-slate-100 flex items-center gap-1 cursor-pointer transition-colors"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 md:p-10 rounded-3xl glass shadow-md border border-slate-200/40 dark:border-slate-800/40 space-y-6"
            >
              <div className="space-y-1">
                <h4 className="font-display font-bold text-lg text-slate-800 dark:text-white">
                  Send a Message
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-light">
                  Required fields are marked with <span className="text-red-500 font-semibold">*</span>
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center">
                      Your Name <span className="text-red-500 ml-0.5">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm font-light transition-all shadow-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center">
                      Your Email <span className="text-red-500 ml-0.5">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm font-light transition-all shadow-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Internship Opportunities / Collaboration"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm font-light transition-all shadow-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center">
                    Message <span className="text-red-500 ml-0.5">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Gowthami, I'd love to talk about a potential design opportunity..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm font-light transition-all shadow-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || submitStatus === "success"}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600 font-semibold text-sm shadow-md hover:shadow-lg disabled:opacity-75 disabled:cursor-not-allowed transition-all cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin inline-block" />
                      Sending message...
                    </>
                  ) : submitStatus === "success" ? (
                    <>
                      <CheckCircle2 size={16} />
                      Sent Successfully!
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      Send Message
                    </>
                  )}
                </button>

                {/* Toast status messaging */}
                <AnimatePresence>
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      className="p-4 rounded-xl bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 text-green-700 dark:text-green-400 flex items-center gap-2 text-xs font-medium"
                    >
                      <CheckCircle2 size={16} className="text-green-600 dark:text-green-400 shrink-0" />
                      Your message has been delivered. I will reach out shortly!
                    </motion.div>
                  )}
                </AnimatePresence>

              </form>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
