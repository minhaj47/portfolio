"use client";

import { motion } from "framer-motion";

export default function ResearchSection() {
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-slate-900" id="research">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900 dark:text-white">
            Research & Thesis
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-8 max-w-2xl mx-auto">
            Exploring the intersection of AI/ML with real-world applications
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Main Research */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 md:col-span-2">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Evaluating and Enhancing LLMs for Islamic Question Answering
                </h3>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs font-bold">
                  ICCIT 2025
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                This research focuses on evaluating existing Large Language
                Models for Islamic question-answering tasks and enhancing their
                performance through various techniques including prompt
                engineering, fine-tuning, and RAG (Retrieval-Augmented
                Generation) pipelines.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="bg-blue-50 dark:bg-slate-700 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2 text-sm">
                    Prompt Engineering
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Designing effective prompts to improve LLM accuracy on
                    Islamic texts
                  </p>
                </div>
                <div className="bg-purple-50 dark:bg-slate-700 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2 text-sm">
                    Fine-tuning Mistral-7B
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Domain-specific fine-tuning for better Islamic knowledge
                    representation
                  </p>
                </div>
                <div className="bg-pink-50 dark:bg-slate-700 rounded-lg p-4">
                  <h4 className="font-semibold text-pink-700 dark:text-pink-300 mb-2 text-sm">
                    RAG Pipeline
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Implementing retrieval-augmented generation with authentic
                    Islamic sources
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "LLM Evaluation",
                  "Mistral-7B",
                  "RAG",
                  "Prompt Engineering",
                  "Islamic NLP",
                  "Fine-tuning",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Secondary Research */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-6 mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  NarrativeSense: Benchmarking Large Language Models for
                  Socio-Political Identity Framing in Bengali News Articles{" "}
                </h3>
                <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-full text-xs font-medium">
                  Ongoing
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                A computational benchmark to detect identity-based framing in
                Bengali news using expert-annotated data and state-of-the-art
                LLMs (GPT-4o, Gemini, Llama 3), revealing how narratives
                engineer polarization in low-resource languages.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 rounded text-xs">
                  LLM Evaluation
                </span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 rounded text-xs">
                  Bengali NLP
                </span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 rounded text-xs">
                  Socio-Political Framing
                </span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 rounded text-xs">
                  News Analysis
                </span>
              </div>
            </div>

            {/* Research Interest */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-6 mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Detection and Refutation of Misleading Historical Narratives
                </h3>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">
                  Interest
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Developing NLP-based models to detect biased content and
                generate refutations grounded in authentic Islamic sources.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 rounded text-xs">
                  Misinformation Detection
                </span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 rounded text-xs">
                  NLP
                </span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 rounded text-xs">
                  Fact-Checking
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
