"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { assetPath } from "../utils/paths";

export default function GreenconSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const hackathonImages = [
    { src: assetPath("/hackathon/hack1.jpg"), alt: "Award Ceremony" },
    { src: assetPath("/hackathon/hack2.jpg"), alt: "Project Presentation" },
    { src: assetPath("/hackathon/hack3.jpg"), alt: "Mentoring & Supervision" },
    { src: assetPath("/hackathon/hack4.jpg"), alt: "Team Collaboration" },
    { src: assetPath("/hackathon/hack5.JPG"), alt: "Hackathon Participants" },
  ];

  const technologies = [
    "Flutter",
    "Bridgefy SDK",
    "SQLite",
    "Flutter Map",
    "Geolocator",
  ];

  const teamMembers = [
    {
      name: "Roman Raihan",
      role: "Team Lead",
      linkedin: "https://www.linkedin.com/in/roman-raihan-141a09260/",
    },
    {
      name: "Md. Minhajul Haque",
      role: "Full Stack Development & Mesh Network Integration",
      linkedin: "https://www.linkedin.com/in/minhaj47/",
    },
    {
      name: "Md Abdullah Al Mahadi Apurbo",
      role: "Full Stack Development",
      linkedin: "https://www.linkedin.com/in/mdabdullahalmahdi92/",
    },
  ];

  return (
    <section
      className="py-20 px-4 bg-gradient-to-b from-green-50 to-white dark:from-slate-800 dark:to-slate-900"
      id="greencon"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-6">
            <div className="relative w-32 h-32 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={assetPath(
                  "/hackathon/Greentech Apps Foundation_Greentech-Apps-Foundation-Icon_1.png",
                )}
                alt="Greentech Apps Foundation Logo"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Greencon Hackathon 2025
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
            An exhilarating experience participating in the Greencon Hackathon,
            organized by Greentech Apps Foundation. Focused on reflecting our
            commitment to developing practical, impactful solutions for Muslim
            communities in need, especially during crises.
          </p>

          {/* Event Details */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <Calendar className="w-5 h-5 text-green-600 dark:text-green-400" />
              <span>3 – 4 July 2025</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <MapPin className="w-5 h-5 text-green-600 dark:text-green-400" />
              <span>MEC</span>
            </div>
          </div>
        </motion.div>

        {/* Achievement Card */}
        <div className="bg-slate-700 dark:bg-slate-900 rounded-3xl shadow-2xl p-8 md:p-12 mb-12 border border-green-500/30">
          {/* Preliminary Round Result */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <h3 className="text-white text-2xl font-semibold">
                1st Runner Up 🏆
              </h3>
            </div>
            <p className="text-gray-400 text-lg">Team: NoSignalLab</p>
          </div>

          {/* Achievement Description */}
          <p className="text-gray-300 text-center max-w-4xl mx-auto mb-8 leading-relaxed">
            Developed a crisis communication and utility app using mesh
            networking technology. Our solution enables device-to-device
            communication without internet, providing essential emergency tools
            for communities in disaster situations and areas with limited
            connectivity.
          </p>

          {/* Project Features */}
          <div className="mb-8">
            <h4 className="text-gray-400 text-center text-sm uppercase tracking-wider mb-6">
              Key Features
            </h4>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-6">
              <div className="rounded-lg p-4 border border-green-600/20">
                <h5 className="text-green-400 font-semibold mb-2">
                  Communication Core
                </h5>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>🌐 Mesh Networking via Bluetooth & WiFi</li>
                  <li>📢 Broadcasting to all participants</li>
                  <li>💬 Individual & Group Chat</li>
                  <li>📍 Real-time Location Sharing</li>
                </ul>
              </div>
              <div className="rounded-lg p-4 border border-green-600/20">
                <h5 className="text-green-400 font-semibold mb-2">
                  Emergency Tools
                </h5>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>🆘 SOS Alert System</li>
                  <li>🔦 Built-in Flashlight</li>
                  <li>🚨 Emergency Notifications</li>
                  <li>👤 Role-based User Management</li>
                </ul>
              </div>
            </div>
            <div className="rounded-lg p-4 border border-green-600/20 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-2">
                <p className="text-gray-300 text-sm">
                  🔐 Encrypted Communication
                </p>
                <p className="text-gray-300 text-sm">
                  🔋 Super Power Saving Mode
                </p>
                <p className="text-gray-300 text-sm">
                  📱 Cross-Platform (Android & iOS)
                </p>
                <p className="text-gray-300 text-sm">
                  🌐 No Infrastructure Dependency
                </p>
              </div>
            </div>
          </div>

          {/* Technologies Used */}
          <div className="mb-8">
            <h4 className="text-gray-400 text-center text-sm uppercase tracking-wider mb-4">
              Technologies Used
            </h4>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-6 py-2 text-green-300 rounded-lg text-sm font-medium border border-green-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Team Members */}
          <div className="grid md:grid-cols-3 gap-6">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl p-6 border border-green-600/30 hover:border-green-500/50 transition-all duration-300"
              >
                <h4 className="text-white font-bold text-lg mb-2">
                  {member.name}
                </h4>
                <p className="text-gray-300 text-sm mb-4">{member.role}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 text-sm transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Photo Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {hackathonImages.map((image, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative aspect-square rounded-xl overflow-hidden shadow-lg cursor-pointer group"
                onClick={() => setSelectedImage(image.src)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm font-medium">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl w-full h-[80vh]">
              <Image
                src={selectedImage}
                alt="Selected hackathon image"
                fill
                className="object-contain"
              />
              <button
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
        )}

        {/* Greentech Foundation Banner */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-3xl shadow-2xl overflow-hidden mt-10 mb-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="p-8 md:p-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                Greentech Apps Foundation
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                A pioneering organization dedicated to promoting sustainable
                technology solutions and empowering developers to create
                applications that address environmental challenges. The
                foundation brings together innovators, technologists, and
                environmental advocates to build a greener digital future.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white/20 rounded-full text-white text-sm">
                  Sustainability
                </span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-white text-sm">
                  Innovation
                </span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-white text-sm">
                  Green Tech
                </span>
              </div>
            </div>
            <div className="relative h-64 md:h-full min-h-[300px]">
              <Image
                src={assetPath("/hackathon/Greentech Apps Foundation_1_3.png")}
                alt="Greentech Apps Foundation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
