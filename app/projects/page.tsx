"use client";

import {
  ExternalLink,
  Github,
  Calendar,
  Tag,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-black dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)]"></div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 py-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-center leading-[0.9] text-primary dark:text-white mb-6">
            Projects
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light dark:text-white">
            Explore a collection of projects that showcase my skills and passion for building innovative solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20"
        >
          {/* Portfolio Website */}
          <motion.div
            variants={itemVariants}
            className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <h2 className="text-2xl font-light text-foreground">
                    Theos Learning
                  </h2>
                </div>
                <div className="flex space-x-2">
                  {/* space for icons */}
                </div>
              </div>

              <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-justify mb-6 font-open-sans">
                Developed and maintained the API backend for the Theo Learning Platform, a comprehensive learning management system built with Javascript/Node.js, serving GP Construcción&apos;s training needs. Engineered robust RESTful APIs enabling seamless user authentication, course management, and learning analytics, supporting the platform&apos;s core functionality. Implemented Redis caching service for session management, optimizing API performance and reducing database load for 600 concurrent users.
              </p>

              <div className="flex items-center text-xs text-muted-foreground mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                <span>November - December 2025</span>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 px-3 py-1 rounded-full text-xs font-light">
                  Node.js
                </span>
                <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-xs font-light">
                  JavaScript
                </span>
                <span className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 px-3 py-1 rounded-full text-xs font-light">
                  Redis
                </span>
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-light">
                  RESTful APIs
                </span>
              </div>
            </div>
          </motion.div>

          {/* Heatshield */}
          <motion.div
            variants={itemVariants}
            className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <h2 className="text-2xl font-light text-foreground">
                    Heatshield
                  </h2>
                </div>
                <div className="flex space-x-2">
                  <a
                    href="https://github.com/bashlui/Heatshield-Swift"
                    className="p-2 bg-muted rounded-lg hover:bg-accent transition-colors"
                    title="View Code"
                  >
                    <Github className="w-4 h-4 text-muted-foreground" />
                  </a>
                </div>
              </div>

              <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-justify mb-6 font-open-sans">
                SwiftUI application focused on sustainability and heat related
                problems. This app aims to provide users with insights and tools
                to manage heat exposure and promote sustainable practices.
              </p>

              <div className="flex items-center text-xs text-muted-foreground mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                <span>June 2025</span>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="bg-yellow-100 dark:bg-orange-700/30 text-orange-500 dark:text-orange-300 px-3 py-1 rounded-full text-xs font-light">
                  Swift
                </span>
                <span className="bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-300 px-3 py-1 rounded-full text-xs font-light">
                  MapKit
                </span>
                <span className="bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 px-3 py-1 rounded-full text-xs font-light">
                  CoreLocation
                </span>
                <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 px-3 py-1 rounded-full text-xs font-light">
                  OpenWeatherAPI
                </span>
              </div>
            </div>
          </motion.div>

          {/* Cipheria Web */}
          <motion.div
            variants={itemVariants}
            className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <h2 className="text-2xl font-light text-foreground">
                    Cipheria Web
                  </h2>
                </div>
                <div className="flex space-x-2">
                  <a
                    href="https://cipheria.pro"
                    className="p-2 bg-muted rounded-lg hover:bg-accent transition-colors"
                    title="Live Site"
                  >
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </a>
                </div>
              </div>

              <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-justify mb-6">
                Cipheria Web is a modern landing page for a startup company built with cutting-edge web technologies. The site features responsive design, optimized performance, and seamless deployment infrastructure.
              </p>

              <div className="flex items-center text-xs text-muted-foreground mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                <span>July 2025</span>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-light">
                  React
                </span>
                <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-3 py-1 rounded-full text-xs font-light">
                  Astro
                </span>
                <span className="bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300 px-3 py-1 rounded-full text-xs font-light">
                  Tailwind CSS
                </span>
                <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 px-3 py-1 rounded-full text-xs font-light">
                  Firebase
                </span>
                <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-light">
                  Responsive Design
                </span>
              </div>
            </div>
          </motion.div>

          {/* Opsight */}
          <motion.div
            variants={itemVariants}
            className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <h2 className="text-2xl font-light text-foreground">
                    Opsight
                  </h2>
                </div>
                <div className="flex space-x-2">
                  <a
                    href="https://github.com/HackMTY-2025-GateGroup/opsight-app"
                    className="p-2 bg-muted rounded-lg hover:bg-accent transition-colors"
                    title="View Code"
                  >
                    <Github className="w-4 h-4 text-muted-foreground" />
                  </a>
                </div>
              </div>

              <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-justify mb-6 font-open-sans">
                Opsight (Operations + Insight) is an iOS/iPadOS application designed for Gategroup airline catering warehouse operations. The app streamlines the complete catering workflow with intelligent batch management, waste reduction, and on-device computer vision for cart verification.
              </p>

              <div className="flex items-center text-xs text-muted-foreground mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                <span>October 2025</span>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-light">
                  MLX
                </span>
                <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-xs font-light">
                  Apple Foundation
                </span>
                <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 px-3 py-1 rounded-full text-xs font-light">
                  ARKit
                </span>
                <span className="bg-yellow-100 dark:bg-orange-700/30 text-orange-500 dark:text-orange-300 px-3 py-1 rounded-full text-xs font-light">
                  Swift
                </span>
                <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-light">
                  YOLO
                </span>
              </div>
            </div>
          </motion.div>

          {/* Brew */}
          <motion.div
            variants={itemVariants}
            className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-yellow-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-700 rounded-full mr-3"></div>
                  <h2 className="text-2xl font-light text-foreground">
                    Brew
                  </h2>
                </div>
                <div className="flex space-x-2">
                  <a
                    href="https://github.com/brew-kafe/brew-app"
                    className="p-2 bg-muted rounded-lg hover:bg-accent transition-colors"
                    title="View Code"
                  >
                    <Github className="w-4 h-4 text-muted-foreground" />
                  </a>
                </div>
              </div>

              <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-justify mb-6">
                Brew is a coffee brewing app that helps users discover new
                coffee recipes, track their brewing habits, and improve their
                coffee-making skills through personalized recommendations.
              </p>

              <div className="flex items-center text-xs text-muted-foreground mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Coming Soon</span>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="bg-yellow-100 dark:bg-orange-700/30 text-orange-500 dark:text-orange-300 px-3 py-1 rounded-full text-xs font-light">
                  Swift
                </span>
                <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-xs font-light">
                  MapKit
                </span>
                <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 px-3 py-1 rounded-full text-xs font-light">
                  FastAPI
                </span>
                <span className="bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-300 px-3 py-1 rounded-full text-xs font-light">
                  Apple Foundation
                </span>
                <span className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-light">
                  CoreData
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Project Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-card border border-border rounded-2xl p-8 mb-12"
        >
          <div className="flex items-center justify-center mb-6">
            <Tag className="w-8 h-8 text-primary mr-3" />
            <h2 className="text-2xl font-light text-foreground">
              My Project Philosophy
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-light text-foreground mb-4">
                Purpose-Driven
              </h3>
              <p className="text-m text-muted-foreground font-open-sans">
                Every project I build serves a real purpose and addresses
                genuine problems or learning goals.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-light text-foreground mb-4">
                Quality First
              </h3>
              <p className="text-m text-muted-foreground font-open-sans">
                I focus on writing clean, maintainable code with proper
                documentation and testing.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-light text-foreground mb-4">
                Continuous Learning
              </h3>
              <p className="text-m text-muted-foreground font-open-sans">
                Each project is an opportunity to learn new technologies and
                improve my skills.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 text-center"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-card border border-border text-foreground px-8 py-4 rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 font-light group"
            >
              <div className="flex items-center justify-center">
                <ArrowLeft className="w-5 h-5 mr-2 group-hover:translate-x-[-4px] transition-transform" />
                <span>Back to Home</span>
              </div>
            </Link>
            <Link
              href="/about"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-2xl hover:bg-primary/90 hover:-translate-y-1 transition-all duration-300 font-light group"
            >
              <div className="flex items-center justify-center">
                <span>About Me</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
