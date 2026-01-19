"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Sparkles, Target } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-15 px-4 bg-gray-50 dark:bg-slate-800/50" id="about">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium inline-block mb-10">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-10">
            Building the Future with Code
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Final-year CSE student with hands-on experience in production
            systems, AI integration, and solving complex technical challenges.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Professional Summary Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-1 border-amber-400"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-2xl">
                <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Professional Focus
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I prioritize database design, efficient code, practical
              problem-solving, and effective teamwork. My approach combines
              technical excellence with real-world impact.
            </p>
            <div className="space-y-3">
              {[
                "Built production systems serving 3K+ users",
                "1000+ algorithmic problems solved",
                "AI/ML integration specialist",
                "100% success rate in live events",
                "End-to-end system architecture",
                "1st Runner-Up - GreenCon Hackathon 2025",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <Sparkles className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-gradient-to-br from-blue-950 to-purple-950 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-white"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
              <h4 className="text-xl font-bold mb-2">
                Shahjalal University of Science and Technology
              </h4>
              <p className="text-white/90 mb-2">
                B.Sc in Computer Science and Engineering
              </p>
              <div className="flex items-center gap-2 text-sm text-white/80 mb-3">
                <MapPin className="w-4 h-4" />
                <span>Sylhet, Bangladesh</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/80">2021 - 2026</span>
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full font-bold text-lg">
                  CGPA: 3.64
                </span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Focus Areas</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Full-Stack Development",
                  "AI/ML Integration",
                  "System Design",
                  "Database Optimization",
                  "Real-time Systems",
                ].map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
