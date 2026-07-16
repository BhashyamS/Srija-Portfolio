"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { featuredProjects } from "@/data/featuredProjects";
import GlassCard from "@/components/ui/GlassCard";
import ProjectCard from "@/components/FeaturedWork/ProjectCard";

export default function FeaturedWork() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = featuredProjects[activeIndex];

  const previousProject = () => {
    setActiveIndex((current) =>
      current === 0 ? featuredProjects.length - 1 : current - 1
    );
  };

  const nextProject = () => {
    setActiveIndex((current) =>
      current === featuredProjects.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section
      id="projects"
      className="relative px-[clamp(1.25rem,4vw,4rem)] py-14"
    >
      <div className="mx-auto max-w-[1200px]">
        <p className="mb-2 text-[10px] font-black uppercase tracking-[0.22em] text-blue-300">
          Featured Project
        </p>

        <h2 className="max-w-3xl text-[clamp(1.8rem,3vw,3rem)] font-black leading-[0.95] tracking-[-0.06em]">
          One main showcase,{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            more to explore.
          </span>
        </h2>

        <div className="mt-6 space-y-5">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <GlassCard className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr]">
                <div className="hidden border-r border-white/10 bg-[#070914] p-4 lg:block">
                  <div className="mb-4 flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                  </div>

                  <div className="rounded-2xl border border-blue-400/20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-4 shadow-[0_0_28px_rgba(124,58,237,0.2)]">
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-200">
                      Preview
                    </p>

                    <h3 className="mt-2 line-clamp-2 text-[clamp(1.35rem,2.2vw,2.2rem)] font-black leading-[0.92] tracking-[-0.06em]">
                      {activeProject.title}
                    </h3>

                    <p className="mt-2 line-clamp-1 text-xs text-white/65">
                      {activeProject.subtitle}
                    </p>

                    <div className="mt-4 h-[250px] overflow-hidden rounded-xl border border-white/10 bg-white shadow-xl">
                      <img
                        src={activeProject.heroImage}
                        alt={activeProject.title}
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <p className="mb-3 inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs font-bold text-blue-200">
                    {activeProject.status}
                  </p>

                  <h3 className="line-clamp-2 text-[clamp(1.6rem,2.5vw,2.7rem)] font-black leading-[0.95] tracking-[-0.06em]">
                    {activeProject.title}
                  </h3>

                  <p className="mt-2 line-clamp-1 text-sm font-bold text-purple-200">
                    {activeProject.subtitle}
                  </p>

                  <p className="mt-4 line-clamp-3 max-w-2xl text-sm leading-6 text-white/65">
                    {activeProject.description}
                  </p>

                  <div className="mt-4 grid gap-3 md:grid-cols-2">
                    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                      <p className="text-[9px] font-black uppercase tracking-[0.18em] text-blue-300">
                        Problem
                      </p>
                      <p className="mt-2 line-clamp-3 text-xs leading-5 text-white/65">
                        {activeProject.problem}
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                      <p className="text-[9px] font-black uppercase tracking-[0.18em] text-purple-300">
                        Impact
                      </p>
                      <p className="mt-2 line-clamp-3 text-xs leading-5 text-white/65">
                        {activeProject.impact}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {activeProject.tech.slice(0, 5).map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-white/70"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-3">
                    {activeProject.caseStudyUrl ? (
                      <a
                        href={activeProject.caseStudyUrl}
                        className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black text-black transition hover:scale-105"
                      >
                        View Case Study
                        <ArrowRight size={15} />
                      </a>
                    ) : activeProject.githubUrl ? (
                      <a
                        href={activeProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black text-black transition hover:scale-105"
                      >
                        View GitHub
                        <ArrowRight size={15} />
                      </a>
                    ) : null}

                    {activeProject.demoUrl && (
                      <a
                        href={activeProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-black text-white transition hover:border-blue-300"
                      >
                        Live Demo
                      </a>
                    )}

                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <div className="flex items-center justify-between">
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-white/50">
              More Projects
            </p>

            <div className="flex gap-2">
              <button
                onClick={previousProject}
                className="rounded-full border border-white/10 bg-white/5 p-2 transition hover:bg-white/10"
              >
                <ChevronLeft size={15} />
              </button>

              <button
                onClick={nextProject}
                className="rounded-full border border-white/10 bg-white/5 p-2 transition hover:bg-white/10"
              >
                <ChevronRight size={15} />
              </button>
            </div>
          </div>

          <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                active={activeIndex === index}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}