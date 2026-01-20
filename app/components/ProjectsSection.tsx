"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Cpu, ExternalLink, Github, Play, Trophy, X, Zap } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Project, projects } from "./SharedData";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="py-20 px-4" id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-7 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-25">
            From production systems to learning experiments
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              fadeInUp={fadeInUp}
              onPreview={() => setSelectedProject(project)}
            />
          ))}
        </motion.div>

        {/* Project Preview Modal */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectPreview
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
  fadeInUp: {
    initial: { opacity: number; y: number };
    animate: { opacity: number; y: number };
    transition: { duration: number };
  };
  onPreview: () => void;
}

function ProjectCard({ project, fadeInUp, onPreview }: ProjectCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
      onClick={onPreview}
    >
      {/* Project Image or Header */}
      {project.image ? (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            quality={75}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {project.isHackathon && (
            <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 z-10">
              <Trophy className="w-3 h-3" /> Winner
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            <p className="text-white/90 text-sm">{project.subtitle}</p>
          </div>
          <span className="absolute top-4 left-4 px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs">
            {project.semester}
          </span>
        </div>
      ) : (
        <div
          className={`h-32 bg-gradient-to-r ${project.gradient} p-6 relative`}
        >
          {project.isHackathon && (
            <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
              <Trophy className="w-3 h-3" /> Winner
            </div>
          )}
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <p className="text-white/80 text-sm">{project.subtitle}</p>
          <span className="absolute bottom-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs">
            {project.semester}
          </span>
        </div>
      )}

      {/* Project Content */}
      <div className="p-6">
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Features */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
            Key Features:
          </h4>
          <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
            {project.features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="flex items-start gap-1">
                <span className="text-green-500">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1 mb-4">
          {project.tech.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 rounded text-xs"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 5 && (
            <span className="px-2 py-1 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 rounded text-xs">
              +{project.tech.length - 5}
            </span>
          )}
        </div>

        {/* Impact Badge */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">
            <Zap className="w-3 h-3" />
            {project.impact}
          </span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1.5 border-1 border-blue-600 text-gray-600 dark:text-white rounded-lg text-xs font-medium hover:shadow-md transition-all"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-3 h-3" /> Live
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1.5 bg-gray-900 dark:bg-gray-700 text-white rounded-lg text-xs font-medium hover:shadow-md transition-all"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-3 h-3" /> Code
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1.5 border-2 border-red-500 text-red-400 rounded-lg text-xs font-medium hover:shadow-md transition-all"
              onClick={(e) => e.stopPropagation()}
            >
              <Play className="w-3 h-3" /> Demo
            </a>
          )}
          {project.mobileAppUrl && (
            <a
              href={project.mobileAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1.5 border-2 border-green-500 text-gray-600 dark:text-white rounded-lg text-xs font-medium hover:shadow-md transition-all"
              onClick={(e) => e.stopPropagation()}
            >
              <Cpu className="w-3 h-3" /> App
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// Project Preview Modal Component
interface ProjectPreviewProps {
  project: Project;
  onClose: () => void;
}

function ProjectPreview({ project, onClose }: ProjectPreviewProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with gradient or image */}
        {project.image ? (
          <div className="relative h-64 w-full overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 1200px"
              quality={85}
              priority={false}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
              className="object-cover"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full text-white transition-all z-10"
              aria-label="Close preview"
            >
              <X className="w-5 h-5" />
            </button>
            {project.isHackathon && (
              <div className="absolute top-4 left-4 inline-flex items-center gap-1 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold">
                <Trophy className="w-4 h-4" /> Hackathon Winner
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h2 className="text-3xl font-bold text-white mb-2">
                {project.title}
              </h2>
              <p className="text-white/90 text-lg">{project.subtitle}</p>
              <span className="inline-block mt-2 px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm">
                {project.semester}
              </span>
            </div>
          </div>
        ) : (
          <div className={`bg-gradient-to-r ${project.gradient} p-6 relative`}>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-white transition-all"
              aria-label="Close preview"
            >
              <X className="w-5 h-5" />
            </button>

            {project.isHackathon && (
              <div className="inline-flex items-center gap-1 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold mb-2">
                <Trophy className="w-4 h-4" /> Hackathon Winner
              </div>
            )}

            <h2 className="text-3xl font-bold text-white mb-2">
              {project.title}
            </h2>
            <p className="text-white/90 text-lg">{project.subtitle}</p>
            <span className="inline-block mt-2 px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm">
              {project.semester}
            </span>
          </div>
        )}

        {/* Scrollable Content */}
        <div className="p-6 pb-8 overflow-y-auto max-h-[calc(90vh-16rem)]">
          {/* Description */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              About This Project
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Impact Badge */}
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
              <Zap className="w-4 h-4" />
              {project.impact}
            </span>
          </div>

          {/* Key Features */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Key Features
            </h3>
            <ul className="grid md:grid-cols-2 gap-2">
              {project.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-gray-600 dark:text-gray-300"
                >
                  <span className="text-green-500 text-xl leading-none">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Stack */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Availability Links */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Availability
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-red-500 hover:border-red-600 text-red-500 rounded-xl font-medium transition-all shadow-lg hover:shadow-xl"
                >
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-medium transition-all shadow-lg hover:shadow-xl"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Visit Live Site</span>
                </a>
              )}

              {project.mobileAppUrl && (
                <a
                  href={project.mobileAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-green-500 hover:border-2 border-green-600 text-white rounded-xl font-medium transition-all shadow-lg hover:shadow-xl"
                >
                  <Cpu className="w-5 h-5" />
                  <span>App</span>
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-xl font-medium transition-all shadow-lg hover:shadow-xl"
                >
                  <Github className="w-5 h-5" />
                  <span>View Source Code</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
