"use client";

import { motion } from "framer-motion";
import {
  Award,
  Brain,
  Cloud,
  Code,
  Container,
  Sparkles,
  Trophy,
  Users,
  Wrench,
} from "lucide-react";
import { achievements } from "./SharedData";

// Icon mapping for achievements
const iconMap: Record<string, React.ReactNode> = {
  Trophy: <Trophy className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  Code: <Code className="w-6 h-6" />,
};

export default function AchievementsSection() {
  return (
    <section className="py-20 px-4" id="achievements">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900 dark:text-white">
            Achievements & Certifications
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
            Milestones and continuous learning journey
          </p>

          {/* Key Achievements */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {achievements.map((achievement, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 border-4 border-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                  <div className="text-black dark:text-white">
                    {iconMap[achievement.iconName]}
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Production Impact Stats */}
          <div className="border-2 border-blue-500 rounded-2xl shadow-xl p-8 mb-8">
            <h3 className="text-2xl text-gray-900 dark:text-white mb-15 text-center">
              Production Impact
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl text-gray-900 dark:text-white mb-1">
                  2-3K+
                </div>
                <div className="text-gray-600 dark:text-white/70 text-sm">
                  Total Users Served
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl text-gray-900 dark:text-white mb-1">
                  100%
                </div>
                <div className="text-gray-600 dark:text-white/70 text-sm">
                  Event Success Rate
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl text-gray-900 dark:text-white mb-1">
                  200+
                </div>
                <div className="text-gray-600 dark:text-white/70 text-sm">
                  APIs Developed
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl text-gray-900 dark:text-white mb-1">
                  5+
                </div>
                <div className="text-gray-600 dark:text-white/70 text-sm">
                  Live Applications
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="border-2 border-amber-500 rounded-2xl shadow-lg p-8">
            <h3 className="font-bold text-gray-900 dark:text-white mb-12 flex items-center justify-center gap-2 text-xl">
              <Award className="w-6 h-6 text-blue-500" />
              Professional Certifications
            </h3>

            {/* Hexagon Grid */}
            <div className="flex flex-wrap justify-center items-center gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: "Supervised ML",
                  subtitle: "Regression & Classification",
                  issuer: "DeepLearning.AI",
                  instructor: "Andrew Ng",
                  issued: "Issued 2024",
                  gradient: "from-blue-500 via-blue-600 to-cyan-600",
                  icon: <Brain className="w-12 h-12" />,
                },
                {
                  title: "Docker Training",
                  subtitle: "Absolute Beginner",
                  issuer: "KodeKloud",
                  instructor: "",
                  issued: "Issued 2024",
                  gradient: "from-cyan-500 via-blue-500 to-blue-600",
                  icon: <Container className="w-12 h-12" />,
                },
                {
                  title: "AWS Certified",
                  subtitle: "Cloud Foundations",
                  issuer: "Amazon Web Services",
                  instructor: "",
                  issued: "Issued 2024",
                  gradient: "from-orange-500 via-orange-600 to-yellow-600",
                  icon: <Cloud className="w-12 h-12" />,
                },
                {
                  title: "Finetuning LLM",
                  subtitle: "Basic",
                  issuer: "DeepLearning.AI",
                  instructor: "",
                  issued: "Issued Aug 2025",
                  gradient: "from-purple-500 via-purple-600 to-pink-600",
                  icon: <Sparkles className="w-12 h-12" />,
                },
                {
                  title: "DevOps Workshop",
                  subtitle: "Absolute Beginners",
                  issuer: "Ostad",
                  instructor: "",
                  issued: "Issued Aug 2025",
                  gradient: "from-green-500 via-teal-600 to-cyan-600",
                  icon: <Wrench className="w-12 h-12" />,
                },
              ].map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  {/* Hexagon Container */}
                  <div className="relative w-48 h-52 hover:scale-105 transition-transform duration-300">
                    {/* Hexagon Shape using clip-path */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} shadow-xl hover:shadow-2xl transition-shadow duration-300`}
                      style={{
                        clipPath:
                          "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                      }}
                    >
                      {/* Content */}
                      <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                        {/* Logo/Icon */}
                        {/* <div className="mb-3 text-white drop-shadow-lg">
                          {cert.icon}
                        </div> */}

                        <h4 className="font-bold text-white text-sm mb-1 leading-tight">
                          {cert.title}
                        </h4>
                        <p className="text-white/90 text-xs mb-2 leading-tight">
                          {cert.subtitle}
                        </p>
                        <div className="w-12 h-px bg-white/40 my-2"></div>
                        <p className="text-white/80 text-xs font-medium">
                          {cert.issuer}
                        </p>
                        {cert.instructor && (
                          <p className="text-white/70 text-xs mt-1">
                            {cert.instructor}
                          </p>
                        )}
                        <p className="text-white/60 text-xs mt-2">
                          {cert.issued}
                        </p>
                      </div>
                    </div>

                    {/* Outer glow effect on hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}
                      style={{
                        clipPath:
                          "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                      }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
