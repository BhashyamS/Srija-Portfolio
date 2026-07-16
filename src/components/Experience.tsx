"use client";

import { motion } from "framer-motion";
import { Database, LineChart, Code2, Users, Workflow } from "lucide-react";

const experiences = [
  {
    company: "Infoshare Systems, Inc.",
    role: "Data Engineer Intern",
    date: "05/2026",
    location: "Remote",
    icon: Workflow,
    tags: ["ETL", "JSON/XML", "SQL", "Automation"],
    bullets: [
      "Designed and maintained ETL pipelines for structured and semi-structured JSON/XML data.",
      "Supported database debugging, query tuning, performance monitoring, and automation workflows.",
    ],
  },
  {
    company: "Fox Corporation",
    role: "Data Analyst / Developer Intern",
    date: "06/2025 – 09/2025",
    location: "Los Angeles, CA",
    icon: LineChart,
    tags: ["SQL", "Tableau", "ETL", "Data Quality"],
    bullets: [
      "Optimized complex SQL queries using CTEs, joins, and window functions, reducing manual reporting effort by 40%.",
      "Built 6+ Tableau dashboards for KPI tracking, system usage, performance trends, and error rates.",
      "Validated ETL pipelines processing 100K+ daily records, improving reporting accuracy by 25%.",
    ],
  },
  {
    company: "Vistora Technologies Inc.",
    role: "Web Developer Intern",
    date: "03/2025 – 05/2025",
    location: "Los Angeles, CA",
    icon: Code2,
    tags: ["React", "REST APIs", "Figma", "Frontend"],
    bullets: [
      "Built responsive React.js components from Figma designs.",
      "Integrated REST APIs for dynamic product metrics.",
    ],
  },
  {
    company: "Code Ninjas",
    role: "Center Manager / Code Sensei",
    date: "02/2023 – 12/2023",
    location: "Tracy, CA",
    icon: Users,
    tags: ["Power BI", "Excel", "Analytics", "Google Analytics"],
    bullets: [
      "Built Power BI and Excel dashboards tracking engagement, retention, and curriculum completion for 200+ students.",
      "Analyzed enrollment trends using Google Analytics and campaign data, contributing to a 30% increase in sign-ups.",
      "Implemented data-driven marketing strategies using analytics tools and social insights.",
    ],
  },
  {
    company: "Visionyle Solutions LTD",
    role: "Software Developer",
    date: "07/2021 – 02/2023",
    location: "Vijayawada, AP, India",
    icon: Database,
    tags: ["SQL", "Python", "Bash", "JSON/XML"],
    bullets: [
      "Optimized SQL queries for a student information system serving 1,000+ users, reducing report latency by 35%.",
      "Automated backend processes using Python and Bash, improving operational efficiency by 25%.",
      "Integrated JSON/XML feeds and performed query tuning and database performance monitoring.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative px-[clamp(1.25rem,5vw,6rem)] py-[clamp(3rem,7vh,6rem)]"
    >
      <div className="mx-auto max-w-[1250px]">
        <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-blue-300">
          Experience
        </p>

        <h2 className="max-w-4xl text-[clamp(2rem,4vw,4rem)] font-black leading-[0.95] tracking-[-0.07em]">
          Work experience across{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            data, analytics, and software.
          </span>
        </h2>

        <div className="mt-10 grid gap-4">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;

            return (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition hover:border-blue-300/40 hover:bg-white/[0.07]"
              >
                <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 shadow-[0_0_18px_rgba(124,58,237,0.35)]">
                      <Icon size={22} />
                    </div>

                    <div>
                      <h3 className="text-xl font-black tracking-[-0.04em]">
                        {exp.company}
                      </h3>
                      <p className="mt-1 font-bold text-blue-200">{exp.role}</p>
                      <p className="mt-1 text-sm text-white/45">
                        {exp.date} · {exp.location}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 text-sm leading-6 text-white/65">
                    {exp.bullets.map((bullet) => (
                      <li key={bullet}>• {bullet}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}