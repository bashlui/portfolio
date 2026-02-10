"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

interface ProjectCardProps {
  className?: string;
}

const ProjectCard = ({ className }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={clsx(
        "group relative overflow-hidden rounded-2xl bg-card border border-border p-6 transition-all duration-300 hover:shadow-lg flex flex-col justify-between h-64",
        className
      )}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="bg-muted w-12 h-12 rounded-xl flex items-center justify-center">
            {/* Project Icon Placeholder */}
            <div className="w-6 h-6 bg-foreground/20 rounded-full" />
        </div>
        <div className="flex gap-2">
            <div className="p-2 bg-muted/50 rounded-full hover:bg-muted transition-colors cursor-pointer">
                <Github className="w-5 h-5 text-foreground" />
            </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold text-foreground mb-2">Project Name</h3>
        <p className="text-sm text-muted-foreground font-medium leading-relaxed">
            Short description of the project goes here. Explain what it does and the impact it has.
        </p>
      </div>
    </motion.div>
  );
};

export default function BentoGrid() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-12">
            <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                Selected Projects
            </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
        
        <div className="mt-12 text-center">
            <Link 
                href="/#projects" 
                className="text-primary hover:text-primary/80 transition-colors font-medium text-sm"
            >
                View All Projects &rarr;
            </Link>
        </div>
      </div>
    </section>
  );
}
