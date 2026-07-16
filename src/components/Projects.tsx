"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  Sparkles,
  Database,
  Brain,
  BarChart3,
} from "lucide-react";
import SectionTitle from "./ui/SectionTitle";

const projects = [
  {
    icon: Sparkles,
    title: "Image Insight Bot",
    category: "AI • Computer Vision",
    description:
      "AI-powered application that analyzes marketing images, generates captions, detects objects, compares assets, and exports structured JSON for downstream analytics.",
    tech: [
      "Python",
      "Gemini Vision",
      "Streamlit",
      "JSON",
      "Prompt Engineering",
    ],
    accent: "from-violet-500 to-blue-500",
  },
  {
    icon: Database,
    title: "FOX Operational Analytics",
    category: "Business Intelligence",
    description:
      "Built Tableau dashboards and optimized SQL queries for enterprise operational analytics, improving dashboard performance by approximately 50%.",
    tech: [
      "SQL Server",
      "Tableau",
      "Performance Tuning",
      "Data Modeling",
    ],
    accent: "from-cyan-500 to-blue-500",
  },
  {
    icon: Brain,
    title: "Customer Churn Prediction",
    category: "Machine Learning",
    description:
      "End-to-end predictive modeling pipeline using feature engineering, model evaluation, explainability, and business recommendations.",
    tech: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "XGBoost",
    ],
    accent: "from-fuchsia-500 to-purple-500",
  },
  {
    icon: BarChart3,
    title: "Sales Analytics Dashboard",
    category: "Data Visualization",
    description:
      "Interactive executive dashboard for revenue, profit, trends, KPIs, and regional sales performance.",
    tech: [
      "Power BI",
      "SQL",
      "DAX",
      "Excel",
    ],
    accent: "from-blue-500 to-indigo-500",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative px-[clamp(1.5rem,5vw,6rem)] py-36"
    >
      <div className="mx-auto max-w-[1600px]">

        <SectionTitle
          eyebrow="Featured Work"
          title="Projects that solve"
          highlight="real business problems."
        />

        <div className="mt-20 space-y-10">

          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                className="group overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] backdrop-blur-xl transition hover:border-blue-400/40"
              >

                <div className="grid gap-10 p-10 lg:grid-cols-[1.1fr_0.9fr]">

                  <div>

                    <div
                      className={`mb-8 inline-flex rounded-full bg-gradient-to-r ${project.accent} p-4`}
                    >
                      <Icon size={34} />
                    </div>

                    <p className="font-bold uppercase tracking-[0.2em] text-blue-300">
                      {project.category}
                    </p>

                    <h3 className="mt-3 text-5xl font-black tracking-[-0.05em]">
                      {project.title}
                    </h3>

                    <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">
                      {project.description}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">

                      {project.tech.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm"
                        >
                          {item}
                        </span>
                      ))}

                    </div>

                    <div className="mt-10 flex gap-4">

                      <button className="rounded-full bg-white px-6 py-3 font-bold text-black transition hover:scale-105">
                        Case Study
                      </button>

                      <button className="flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 transition hover:border-blue-300">
                        <ExternalLink size={18} />
                        GitHub
                      </button>

                    </div>

                  </div>

                  <div className="relative flex items-center justify-center">

                    <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20 blur-3xl" />

                    <div className="relative w-full rounded-[2rem] border border-white/10 bg-[#090b15] p-8">

                      <div className="mb-6 flex gap-2">

                        <div className="h-3 w-3 rounded-full bg-red-400" />
                        <div className="h-3 w-3 rounded-full bg-yellow-400" />
                        <div className="h-3 w-3 rounded-full bg-green-400" />

                      </div>

                      <div className="space-y-5">

                        <div className="h-5 w-3/4 rounded-full bg-white/10" />
                        <div className="h-5 w-full rounded-full bg-white/5" />
                        <div className="h-5 w-5/6 rounded-full bg-white/10" />

                        <div className="mt-8 h-44 rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20" />

                      </div>

                    </div>

                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}