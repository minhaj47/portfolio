"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { timeline } from "./SharedData";

export default function TimelineSection() {
  return (
    <section className="py-20 px-4" id="timeline">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-10 mt-5 text-gray-900 dark:text-white">
            Learning Journey
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-30">
            My progression through semesters, projects, and achievements
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-8 ${
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-white dark:border-slate-900 z-10"></div>

              {/* Content Card */}
              <div
                className={`ml-12 md:ml-0 md:w-5/12 ${
                  idx % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <div
                  className={`bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 ${
                    item.isHackathon ? "ring-2 ring-yellow-400" : ""
                  }`}
                >
                  <div className="flex items-center justify-between mr-6 mb-4 gap-2">
                    <span
                      className={`px-3 py-1 border border-blue-300 dark:border-blue-800 text-gray-900 dark:text-white rounded-full text-xs font-bold`}
                    >
                      {item.semester}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-xs">
                      {item.period}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <ul className="space-y-1.5">
                    {item.highlights.map((highlight, hIdx) => (
                      <li
                        key={hIdx}
                        className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2"
                      >
                        <TrendingUp className="w-3 h-3 text-green-500 mt-1 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
