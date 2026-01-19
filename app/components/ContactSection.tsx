"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const HexagonIcon = ({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
}) => {
  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group relative"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={label}
    >
      <svg
        width="80"
        height="92"
        viewBox="0 0 80 92"
        className="transition-all duration-300"
      >
        <defs>
          <linearGradient
            id={`gradient-${label}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              className="text-amber-400"
              stopColor="currentColor"
            />
            <stop
              offset="100%"
              className="text-amber-400"
              stopColor="currentColor"
            />
          </linearGradient>
        </defs>
        <path
          d="M40 2 L72 23 L72 65 L40 86 L8 65 L8 23 Z"
          fill="none"
          stroke={`url(#gradient-${label})`}
          strokeWidth="2"
          className="group-hover:stroke-[3] transition-all duration-300"
        />
        <path
          d="M40 2 L72 23 L72 65 L40 86 L8 65 L8 23 Z"
          fill="currentColor"
          className="text-amber-400/10 group-hover:text-amber-400/20 transition-all duration-300"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <Icon className="w-7 h-7 text-gray-700 dark:text-gray-300 group-hover:text-amber-400 transition-all duration-300 group-hover:scale-110" />
      </div>
    </motion.a>
  );
};

export default function ContactSection() {
  return (
    <section
      className="relative py-30 px-4 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 overflow-hidden"
      id="contact"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 dark:bg-blue-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 dark:bg-purple-400/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-20 bg-black dark:bg-white bg-clip-text text-transparent">
            Let&apos;s Connect
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Social Links with Hexagons */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center lg:items-start"
          >
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200 dark:border-slate-700 w-full">
              <div className="flex justify-center lg:justify-start gap-8 mb-8">
                <HexagonIcon
                  href="mailto:minhajul331047@gmail.com"
                  icon={Mail}
                  label="Email"
                />
                <HexagonIcon
                  href="https://github.com/minhaj47"
                  icon={Github}
                  label="GitHub"
                />
                <HexagonIcon
                  href="https://linkedin.com/in/minhaj47"
                  icon={Linkedin}
                  label="LinkedIn"
                />
              </div>

              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 dark:bg-blue-400/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      Email
                    </p>
                    <a
                      href="mailto:minhajul331047@gmail.com"
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      minhajul331047@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-500/10 dark:bg-purple-400/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Github className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      GitHub
                    </p>
                    <a
                      href="https://github.com/minhaj47"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      @minhaj47
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 dark:bg-blue-400/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      LinkedIn
                    </p>
                    <a
                      href="https://linkedin.com/in/minhaj47"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      linkedin.com/in/minhaj47
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-500/10 dark:bg-purple-400/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      Phone{" "}
                    </p>

                    <span className="text-gray-600 dark:text-gray-400">
                      +8801909484884
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200 dark:border-slate-700">
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full px-6 py-4 bg-gray-50 dark:bg-slate-900/50 border border-gray-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent focus:outline-none transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full px-6 py-4 bg-gray-50 dark:bg-slate-900/50 border border-gray-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent focus:outline-none transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={6}
                    className="w-full px-6 py-4 bg-gray-50 dark:bg-slate-900/50 border border-gray-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent focus:outline-none transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 resize-none"
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 border-2 border-amber-500 text-black dark:text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
