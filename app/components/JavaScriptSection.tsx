"use client";

import { motion } from "framer-motion";
import { CheckCircle, Code } from "lucide-react";
import { jsConcepts, performanceMetrics } from "./SharedData";

// Honeycomb layout: 3 hexagons in first column, 4 in second column (offset)
// Hexagon dimensions for proper honeycomb interlocking
const HEX_WIDTH = 240;
const HEX_HEIGHT = 277;
const H_SPACING = HEX_WIDTH * 0.87; // Proper horizontal spacing for honeycomb
const V_SPACING = HEX_HEIGHT * 0.75; // Proper vertical spacing for interlocking

// Positions for 7 hexagons in honeycomb pattern (hive style)
const hexPositions = [
  // Column 1 - 3 hexagons (aligned)
  { x: 0, y: 0 },
  { x: H_SPACING + 25, y: 0 },
  { x: -HEX_WIDTH / 2 + 7, y: V_SPACING - 5 },
  { x: HEX_WIDTH / 2 - 7, y: V_SPACING - 5 },
  { x: HEX_WIDTH + HEX_WIDTH / 2 - 22, y: V_SPACING - 5 },
  { x: 0, y: V_SPACING * 2 - 10 },
  { x: H_SPACING + 15, y: V_SPACING * 2 - 10 },
];

export default function JavaScriptSection() {
  return (
    <section
      className="py-24 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
      id="javascript"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-7">
            Deeper Understanding of JavaScript
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto italic">
            Beyond syntax — understanding how JavaScript works under the hood
          </p>
        </motion.div>

        {/* JavaScript Honeycomb - Desktop */}
        <div className="hidden lg:block relative mb-20">
          <div
            className="relative mx-auto"
            style={{
              width: `${H_SPACING + HEX_WIDTH + 80}px`,
              height: `${V_SPACING * 3 + 150}px`,
            }}
          >
            {jsConcepts.map((concept, idx) => {
              const pos = hexPositions[idx];
              return (
                <motion.div
                  key={concept.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: idx * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.08,
                    transition: { duration: 0.2 },
                  }}
                  className="absolute group cursor-pointer"
                  style={{
                    left: `${pos.x + 40}px`,
                    top: `${pos.y + 50}px`,
                    width: `${HEX_WIDTH}px`,
                    height: `${HEX_HEIGHT}px`,
                  }}
                >
                  {/* Outer glow effect - visible on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-80 transition-all duration-300 pointer-events-none"
                    style={{
                      filter: `drop-shadow(0 0 12px ${concept.color.split(" ")[1].replace("to-", "")}) drop-shadow(0 0 20px ${concept.color.split(" ")[3]})`,
                    }}
                  >
                    <div
                      className="w-full h-full"
                      style={{
                        clipPath:
                          "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                        background: `linear-gradient(135deg, ${concept.color.split(" ")[1].replace("to-", "")} 0%, ${concept.color.split(" ")[3]} 100%)`,
                      }}
                    />
                  </div>

                  <div
                    className="relative"
                    style={{
                      width: `${HEX_WIDTH}px`,
                      height: `${HEX_HEIGHT}px`,
                    }}
                  >
                    {/* Hexagon Border - Outer */}
                    <div
                      className="absolute inset-0 transition-all duration-300"
                      style={{
                        clipPath:
                          "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                        background: `linear-gradient(135deg, ${concept.color.split(" ")[1].replace("to-", "")} 0%, ${concept.color.split(" ")[3]} 100%)`,
                      }}
                    />

                    {/* Hexagon Inner Background */}
                    <div
                      className="absolute inset-[3px] bg-gradient-to-br from-white via-blue-50/30 to-white dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 transition-all duration-300"
                      style={{
                        clipPath:
                          "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                      }}
                    />

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 z-10">
                      {/* Title */}
                      <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3 text-center leading-tight px-2">
                        {concept.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-gray-600 dark:text-gray-400 text-center leading-relaxed mb -1 px-3">
                        {concept.description}
                      </p>

                      {/* Divider */}
                      <div
                        className="w-12 h-0.5"
                        style={{
                          background: `linear-gradient(90deg, ${concept.color.split(" ")[1].replace("to-", "")}, ${concept.color.split(" ")[3]})`,
                        }}
                      />

                      {/* Example */}
                      <div className="text-[10px] text-amber-600 dark:text-amber-400 italic text-center leading-tight px-4">
                        💡 {concept.example}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile & Tablet: Grid View */}
        <div className="lg:hidden grid md:grid-cols-2 gap-6 mb-12">
          {jsConcepts.map((concept, idx) => (
            <motion.div
              key={concept.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {concept.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                {concept.description}
              </p>
              <div className="pt-4 border-t border-gray-200 dark:border-slate-700">
                <p className="text-xs text-gray-500 dark:text-gray-400 italic">
                  💡 {concept.example}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Performance Impact Section - Restructured */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          {/* Container with background and padding */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 md:p-10 max-w-6xl mx-auto border border-gray-200 dark:border-slate-700">
            <h3 className="text-2xl md:text-3xl text-gray-900 dark:text-white mb-8 flex items-center gap-3 justify-center">
              Example Performance Impacts
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {performanceMetrics.map((metric, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Section Divider (not on last item) */}
                  {idx < performanceMetrics.length - 1 && (
                    <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-3/4 bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-600 to-transparent" />
                  )}

                  {/* Content */}
                  <div className="text-left px-4 space-y-5">
                    {/* 1. Technique as Title */}
                    <div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 font-semibold">
                        Technique
                      </div>
                      <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                        {metric.technique}
                      </h4>
                    </div>

                    {/* 2. Use Case & Issue */}
                    <div className="pt-4 border-t border-gray-200 dark:border-slate-700">
                      <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 font-semibold">
                        Issue
                      </div>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        <span className="font-semibold">{metric.metric}:</span>{" "}
                        {metric.before}
                      </p>
                    </div>

                    {/* 3. Action */}
                    <div className="pt-4 border-t border-gray-200 dark:border-slate-700">
                      <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 font-semibold">
                        Action
                      </div>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Applied {metric.technique.toLowerCase()} to optimize
                        performance
                      </p>
                    </div>

                    {/* 4. Result */}
                    <div className="pt-4 border-t border-gray-200 dark:border-slate-700">
                      <div className="flex items-center justify-left gap-3 mb-5">
                        <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold">
                          Result
                        </div>
                        {/* Improvement Badge */}
                        <div className="inline-block px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 text-green-700 dark:text-green-400 rounded-full text-xs font-bold shadow-sm">
                          ✓ {metric.improvement}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* JavaScript Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Focus Areas */}
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Core Focus Areas
              </h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>
                    <strong>Reasoning over memorization</strong> — understanding
                    the "why" behind language features
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>
                    <strong>Performance-first mindset</strong> — writing code
                    that scales with user load
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>
                    <strong>Async mastery</strong> — leveraging event loop for
                    non-blocking operations
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>
                    <strong>Memory awareness</strong> — managing resources and
                    avoiding common pitfalls
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>
                    <strong>Pattern recognition</strong> — building reusable
                    solutions with closures and HOFs
                  </span>
                </li>
              </ul>
            </div>

            {/* Real-World Applications */}
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-blue-500" />
                Applied in Production
              </h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>
                    Built custom middleware with closure-based state management
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>
                    Optimized event handlers for high-frequency user
                    interactions
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>
                    Implemented efficient data structures (LRU Cache, Custom
                    Queues)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>
                    Debugged complex async race conditions in production systems
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>
                    Reduced memory leaks through proper cleanup and GC
                    understanding
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
