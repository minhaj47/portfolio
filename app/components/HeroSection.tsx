"use client";

import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { assetPath } from "../utils/paths";

// Surrounding hexagon positions - arranged in a loose honeycomb pattern around the center
const surroundingHexPositions = [
  // Inner ring - closer to center
  { x: -220, y: -120, scale: 0.6, opacity: 0.15 },
  { x: 220, y: -120, scale: 0.55, opacity: 0.12 },
  { x: -240, y: 100, scale: 0.5, opacity: 0.1 },
  { x: 240, y: 100, scale: 0.65, opacity: 0.14 },
  { x: 0, y: -200, scale: 0.5, opacity: 0.1 },
  { x: 0, y: 220, scale: 0.55, opacity: 0.12 },

  // Middle ring
  { x: -360, y: -50, scale: 0.45, opacity: 0.08 },
  { x: 360, y: -50, scale: 0.5, opacity: 0.1 },
  { x: -320, y: 180, scale: 0.4, opacity: 0.07 },
  { x: 320, y: 180, scale: 0.45, opacity: 0.08 },
  { x: -180, y: -260, scale: 0.4, opacity: 0.07 },
  { x: 180, y: -260, scale: 0.45, opacity: 0.08 },
  { x: -180, y: 300, scale: 0.35, opacity: 0.06 },
  { x: 180, y: 300, scale: 0.4, opacity: 0.07 },

  // Outer ring - farthest from center
  { x: -450, y: -180, scale: 0.35, opacity: 0.05 },
  { x: 450, y: -180, scale: 0.3, opacity: 0.04 },
  { x: -420, y: 120, scale: 0.3, opacity: 0.04 },
  { x: 420, y: 120, scale: 0.35, opacity: 0.05 },
  { x: -340, y: -240, scale: 0.25, opacity: 0.03 },
  { x: 340, y: -240, scale: 0.3, opacity: 0.04 },
  { x: -60, y: -340, scale: 0.3, opacity: 0.04 },
  { x: 60, y: 360, scale: 0.25, opacity: 0.03 },
  { x: -400, y: 280, scale: 0.25, opacity: 0.03 },
  { x: 400, y: 280, scale: 0.3, opacity: 0.04 },
];

// Hexagon SVG path for consistent shape
const HexagonOutline = ({
  size,
  strokeOpacity,
}: {
  size: number;
  strokeOpacity: number;
}) => (
  <svg width={size} height={size * 1.15} viewBox="0 0 100 115" fill="none">
    <path
      d="M50 2 L95 28 L95 87 L50 113 L5 87 L5 28 Z"
      stroke="currentColor"
      strokeWidth="1"
      strokeOpacity={strokeOpacity}
      fill="none"
    />
  </svg>
);

export default function HeroSection() {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 pt-20 pb-16 relative overflow-hidden"
      id="home"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Md. Minhajul
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
                Haque
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Backed by a strong computer science foundation and a
              problem-solving mindset, I craft scalable solutions using modern
              frameworks, AI integration, and system-driven design. I focus on
              understanding problems at their core, optimizing performance, and
              building clean, user-centric products that scale reliably.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-gradient-to-br from-blue-50/80 to-purple-50/80 dark:from-slate-800 dark:to-slate-700 rounded-2xl border border-blue-200/50 dark:border-blue-900/30 backdrop-blur-sm">
                <div className="text-3xl bg-black dark:bg-white bg-clip-text text-transparent">
                  3000+
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  Users Served
                </div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-purple-50/80 to-blue-50/80 dark:from-slate-800 dark:to-slate-700 rounded-2xl border border-purple-200/50 dark:border-purple-900/30 backdrop-blur-sm">
                <div className="text-3xl bg-black dark:bg-white bg-clip-text text-transparent">
                  20+
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  Projects Completed
                </div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-blue-50/80 to-purple-50/80 dark:from-slate-800 dark:to-slate-700 rounded-2xl border border-blue-200/50 dark:border-blue-900/30 backdrop-blur-sm">
                <div className="text-3xl bg-black dark:bg-white bg-clip-text text-transparent">
                  1000+
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  Problems Solved
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 border-1 border-amber-500 text-black dark:text-white rounded-full font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30"
              >
                Download CV
                <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-blue-300 dark:border-blue-700 text-gray-900 dark:text-white rounded-full font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
              >
                View Projects
              </motion.a>
            </div>
          </motion.div>

          {/* Right Side - Queen Cell Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center items-center min-h-[550px] md:min-h-[700px]"
          >
            {/* Surrounding outlined hexagons - symbolizing potential and growth */}
            {surroundingHexPositions.map((pos, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5 + idx * 0.03,
                  ease: "easeOut",
                }}
                className="absolute text-blue-400/50 dark:text-blue-600/30 hidden lg:block"
                style={{
                  left: `calc(50% + ${pos.x * 0.85}px)`,
                  top: `calc(50% + ${pos.y * 0.85}px)`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <HexagonOutline
                  size={120 * pos.scale}
                  strokeOpacity={pos.opacity * 9}
                />
              </motion.div>
            ))}

            {/* Mobile: Simplified surrounding hexagons */}
            <div className="lg:hidden absolute inset-0">
              {[
                { x: -100, y: -80, scale: 0.5, opacity: 0.1 },
                { x: 100, y: -80, scale: 0.45, opacity: 0.08 },
                { x: -110, y: 80, scale: 0.4, opacity: 0.07 },
                { x: 110, y: 80, scale: 0.5, opacity: 0.1 },
                { x: 0, y: -130, scale: 0.35, opacity: 0.06 },
                { x: 0, y: 150, scale: 0.4, opacity: 0.07 },
              ].map((pos, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + idx * 0.05 }}
                  className="absolute text-blue-400/50 dark:text-purple-600/30"
                  style={{
                    left: `calc(50% + ${pos.x}px)`,
                    top: `calc(50% + ${pos.y}px)`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <HexagonOutline
                    size={100 * pos.scale}
                    strokeOpacity={pos.opacity * 5}
                  />
                </motion.div>
              ))}
            </div>

            {/* Outer glow effect */}
            <div
              className="absolute blur-3xl opacity-20 dark:opacity-15 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(59, 130, 246, 0.4) 0%, rgba(147, 51, 234, 0.3) 50%, transparent 70%)",
                width: "500px",
                height: "500px",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />

            {/* Queen Hexagon Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                type: "spring",
                stiffness: 100,
              }}
              className="relative z-10"
              style={{
                width: "min(420px, 90vw)",
                height: "min(485px, 104vw)",
              }}
            >
              {/* Hexagon Border - Outer */}
              <div
                className="absolute inset-0"
                style={{
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  background:
                    "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #3B82F6 100%)",
                }}
              />

              {/* Hexagon Inner Background */}
              <div
                className="absolute inset-[3px] bg-gradient-to-br from-amber-400 via-amber-50/30 to-amber dark:from-slate-800 dark:via-slate-800 dark:to-slate-900"
                style={{
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
              />

              {/* Subtle inner border */}
              <div
                className="absolute inset-[6px] border border-amber-200/30 dark:border-blue-700/20"
                style={{
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
              />

              {/* Content Container */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-10">
                {/* Profile Avatar */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="mb-5"
                >
                  <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden shadow-xl shadow-blue-500/30 border-4 border-white dark:border-slate-700">
                    <Image
                      src={assetPath("/profile1.jpeg")}
                      alt="Md. Minhajul Haque"
                      width={200}
                      height={200}
                      quality={90}
                      priority
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                      className="w-full h-full object-cover scale-95"
                    />
                  </div>
                </motion.div>

                {/* Name */}
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1 text-center"
                >
                  Md. Minhajul Haque
                </motion.h2>

                {/* Title */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.75 }}
                  className="text-sm md:text-base bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent font-medium mb-2 text-center"
                >
                  Full Stack Engineer & AI/ML Specialist
                </motion.p>

                {/* Location */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="flex items-center gap-1 text-gray-500 dark:text-gray-400 mb-5"
                >
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Sylhet, Bangladesh</span>
                </motion.div>

                {/* Divider */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.4, delay: 0.85 }}
                  className="w-20 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent mb-5"
                />

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="flex gap-4"
                >
                  <motion.a
                    href="https://github.com/minhaj47"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-white dark:bg-slate-700 rounded-full hover:bg-blue-50 dark:hover:bg-slate-600 transition-all duration-300 shadow-md border border-blue-100 dark:border-blue-800/30"
                  >
                    <Github className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/minhaj47"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-white dark:bg-slate-700 rounded-full hover:bg-blue-50 dark:hover:bg-slate-600 transition-all duration-300 shadow-md border border-blue-100 dark:border-blue-800/30"
                  >
                    <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                  </motion.a>
                  <motion.a
                    href="mailto:minhajul331047@gmail.com"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-white dark:bg-slate-700 rounded-full hover:bg-blue-50 dark:hover:bg-slate-600 transition-all duration-300 shadow-md border border-blue-100 dark:border-blue-800/30"
                  >
                    <Mail className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
